import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Download } from "lucide-react";
import { profile, skillGroups } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hemanth Kumar — Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "MCA student & Data Analyst turning complex datasets into actionable business intelligence with Python, SQL and Power BI.",
      },
    ],
  }),
  component: Index,
});

const quickLinks = [
  { to: "/about", label: "About", code: "01" },
  { to: "/skills", label: "Skills", code: "02" },
  { to: "/projects", label: "Projects", code: "03" },
  { to: "/certifications", label: "Certifications", code: "04" },
] as const;

function Index() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-12">
      {/* Hero */}
      <section className="animate-reveal space-y-6">
        <div className="inline-block rounded border border-accent/20 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
          Available for projects
        </div>
        <h1 className="text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
          Hemanth
          <span className="block font-bold">Kumar</span>
        </h1>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent/80">
          {profile.role}
        </p>
        <p className="max-w-md leading-relaxed text-muted-foreground">{profile.tagline}</p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Download className="size-4" />
            Download Resume
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Module grid */}
      <section className="mt-20 space-y-4">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent/70">
          Explore modules
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {quickLinks.map((m) => (
            <Link
              key={m.to}
              to={m.to}
              className="group rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/30"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] text-accent">{m.code}</span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-accent" />
              </div>
              <p className="mt-6 text-sm font-semibold">{m.label}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Stack preview */}
      <section className="mt-16 space-y-4">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent/70">
          Technical stack
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {skillGroups.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-surface p-4">
              <span className="mb-2 block font-mono text-[10px] text-muted-foreground">
                {s.label}
              </span>
              <p className="text-sm font-medium">{s.items}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
