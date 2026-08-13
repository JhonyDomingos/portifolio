import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-md bg-surface p-4 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
