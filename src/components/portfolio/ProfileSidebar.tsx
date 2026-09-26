import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Sparkles,
  Layers,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";

import portrait from "@/assets/portrait-profile.jpg";
import { NAV_ITEMS } from "./data";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Home,
  User,
  Briefcase,
  Sparkles,
  Layers,
  GraduationCap,
  Mail,
};

function useActiveSection() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const sections = NAV_ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.4, 0.8] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return active;
}

function NavList({ active, onNavigate }: { active: string; onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-1">
      {NAV_ITEMS.map((item) => {
        const Icon = ICONS[item.icon];
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={onNavigate}
            className={cn(
              "group flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm font-medium transition-colors",
              isActive
                ? "bg-sky text-sky-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
            )}
          >
            <span
              className={cn(
                "pixel-dot shrink-0 transition-colors",
                isActive ? "bg-sky-foreground pixel-blink" : "bg-border group-hover:bg-sage",
              )}
            />
            <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />
            <span>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

function ProfileBlock({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("flex items-center gap-4", !compact && "flex-col text-center")}>
      <div className="relative">
        <img
          src={portrait}
          alt="Portrait of Cherelyn Agawin"
          width={816}
          height={816}
          className={cn(
            "rounded-sm border border-border object-cover",
            compact ? "h-12 w-12" : "h-28 w-28",
          )}
        />
        <span className="pixel-dot absolute -right-1 -bottom-1 bg-sage" />
      </div>
      <div className={cn(compact && "text-left")}>
        <h1 className={cn("font-semibold text-foreground", compact ? "text-base" : "text-xl")}>
          Cherelyn Agawin
        </h1>
        <p className="text-sm text-muted-foreground">Admin Assistant</p>
        {!compact && (
          <p className="mt-2 flex items-center justify-center gap-1.5 pixel-label">
            <MapPin className="h-3 w-3" strokeWidth={2} />
            Lapu Lapu City, Cebu
          </p>
        )}
      </div>
    </div>
  );
}

export function ProfileSidebar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r border-border bg-sidebar px-6 py-8 lg:flex">
        <ProfileBlock />
        <div className="pixel-divider my-7" />
        <NavList active={active} />
        <div className="mt-auto pt-8">
          <div className="flex gap-1">
            <span className="pixel-dot bg-sky" />
            <span className="pixel-dot bg-sage" />
            <span className="pixel-dot bg-peach" />
            <span className="pixel-dot bg-lavender" />
          </div>
          <p className="mt-3 pixel-label">Portfolio · 2026</p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between gap-4 border-b border-border bg-sidebar/95 px-4 py-3 backdrop-blur lg:hidden">
        <ProfileBlock compact />
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-card text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 top-[68px] z-30 bg-background/95 px-4 py-5 backdrop-blur lg:hidden">
          <NavList active={active} onNavigate={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
