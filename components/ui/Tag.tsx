import type { ReactNode } from "react";

type Variant = "accent" | "accent-2" | "neutral" | "outline";

const base =
  "inline-flex items-center text-[11px] tracking-[0.02em] px-2.5 py-[3px] rounded-[6px]";

const variants: Record<Variant, string> = {
  accent: "bg-accent-800 text-accent-100",
  "accent-2": "bg-accent-800 text-accent-100",
  neutral: "bg-neutral-800 text-neutral-100",
  outline: "border border-accent text-accent",
};

export function Tag({
  children,
  variant = "neutral",
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
