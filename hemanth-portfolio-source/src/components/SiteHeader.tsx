import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const modules = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-mono text-xs tracking-tighter text-accent">
          V.2026_HK
        </Link>

        {/* Desktop modules */}
        <div className="hidden items-center gap-1 md:flex">
          {modules.map((m) => (
            <Link
              key={m.to}
              to={m.to}
              className="rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-accent"
              activeProps={{
                className:
                  "rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-accent bg-accent/10 border border-accent/20",
              }}
              activeOptions={{ exact: m.to === "/" }}
            >
              {m.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid size-9 place-items-center rounded-full border border-accent/20 text-accent md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {/* Mobile module grid */}
      {open && (
        <div className="border-t border-border px-6 pb-6 pt-2 md:hidden">
          <div className="grid grid-cols-2 gap-3">
            {modules.map((m) => (
              <Link
                key={m.to}
                to={m.to}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-border bg-surface px-4 py-3 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-accent"
                activeProps={{
                  className:
                    "rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-xs font-medium uppercase tracking-[0.15em] text-accent",
                }}
                activeOptions={{ exact: m.to === "/" }}
              >
                {m.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
