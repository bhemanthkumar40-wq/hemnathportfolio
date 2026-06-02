import type { ReactNode } from "react";

export function ModuleHeading({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="space-y-3">
      <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-accent/70">
        {index} / {title}
      </span>
      {children}
    </div>
  );
}
