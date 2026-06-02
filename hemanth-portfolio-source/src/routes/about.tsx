import { createFileRoute } from "@tanstack/react-router";
import { ModuleHeading } from "@/components/ModuleHeading";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hemanth Kumar" },
      {
        name: "description",
        content:
          "About Hemanth Kumar, an MCA student and aspiring Data Analyst passionate about turning raw data into meaningful insights.",
      },
      { property: "og:title", content: "About — Hemanth Kumar" },
      {
        property: "og:description",
        content: "MCA student and aspiring Data Analyst focused on data visualization and dashboards.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-12">
      <ModuleHeading index="01" title="About Me">
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">About Me</h1>
      </ModuleHeading>

      <div className="mt-10 grid gap-8 md:grid-cols-[1.5fr_1fr]">
        <p className="text-lg leading-relaxed text-foreground/85">{profile.about}</p>

        <div className="space-y-3">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Education
            </span>
            <p className="mt-1 text-sm font-semibold">MCA Student</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Focus
            </span>
            <p className="mt-1 text-sm font-semibold">Data Analysis & Visualization</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Goal
            </span>
            <p className="mt-1 text-sm font-semibold">Business Intelligence & Insights</p>
          </div>
        </div>
      </div>
    </div>
  );
}
