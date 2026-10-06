import type { ReactNode } from "react";

export function SectionLabel({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-block px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] ${
        dark ? "bg-white/10 text-white" : "bg-ice text-navy"
      } ${className}`}
    >
      {children}
    </span>
  );
}
