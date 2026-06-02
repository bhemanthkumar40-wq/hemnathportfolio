import { createFileRoute } from "@tanstack/react-router";
import { ModuleHeading } from "@/components/ModuleHeading";
import { certifications } from "@/data/portfolio";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Hemanth Kumar" },
      {
        name: "description",
        content:
          "Certifications earned by Hemanth Kumar including Career Essentials in Data Analysis and the Deloitte Data Analytics Job Simulation.",
      },
      { property: "og:title", content: "Certifications — Hemanth Kumar" },
      {
        property: "og:description",
        content: "Verified data analysis credentials and job simulations.",
      },
    ],
  }),
  component: Certifications,
});

function Certifications() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-12">
      <ModuleHeading index="04" title="Verified Credentials">
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Certifications</h1>
      </ModuleHeading>

      <div className="mt-10 divide-y divide-border border-y border-border">
        {certifications.map((cert, i) => (
          <div key={cert} className="group flex items-center gap-5 py-5">
            <span className="font-mono text-[10px] text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium transition-transform group-hover:translate-x-1 md:text-base">
              {cert}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
