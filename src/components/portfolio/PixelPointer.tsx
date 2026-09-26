import { useEffect, useRef } from "react";

/** Decorative pointer feedback; the system cursor remains available for precise clicks. */
export function PixelPointer() {
  const pointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const pointer = pointerRef.current;
    if (!pointer) return;

    const onMove = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== "mouse") return;
      pointer.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      pointer.classList.add("is-visible");

      const target = event.target;
      const card = target instanceof Element ? target.closest<HTMLElement>(".pixel-card") : null;
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
      }
    };
    const onLeave = () => pointer.classList.remove("is-visible");
    const onPointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) onLeave();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onPointerOut);
    window.addEventListener("blur", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("blur", onLeave);
    };
  }, []);

  return (
    <div aria-hidden="true" ref={pointerRef} className="pixel-pointer">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}