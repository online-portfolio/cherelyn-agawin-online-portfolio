export type Tone = "sky" | "sage" | "peach" | "lavender";

export const toneBg: Record<Tone, string> = {
  sky: "bg-sky",
  sage: "bg-sage",
  peach: "bg-peach",
  lavender: "bg-lavender",
};

export const toneText: Record<Tone, string> = {
  sky: "text-sky-foreground",
  sage: "text-sage-foreground",
  peach: "text-peach-foreground",
  lavender: "text-lavender-foreground",
};

export const toneSoft: Record<Tone, string> = {
  sky: "bg-sky/40 text-sky-foreground",
  sage: "bg-sage/40 text-sage-foreground",
  peach: "bg-peach/40 text-peach-foreground",
  lavender: "bg-lavender/40 text-lavender-foreground",
};
