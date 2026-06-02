import { createFileRoute } from "@tanstack/react-router";
import { ModuleHeading } from "@/components/ModuleHeading";
import { skills, skillGroups } from "@/data/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Technical Skills — Hemanth Kumar" },
      {
        name: "description",
        content:
          "Technical skills of Hemanth Kumar: Python, SQL, Power BI, Excel, Tableau, Pandas, NumPy, MySQL and Git.",
      },
      { property: "og:title", content: "Technical Skills — Hemanth Kumar" },
      {
        property: "og:description",
        content: "Data analysis, visualization, libraries and database tooling.",
      },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-12">
      <ModuleHeading index="02" title="Technical Skills">
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Technical Skills</h1>
      </ModuleHeading>

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {skillGroups.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-surface p-4">
            <span className="mb-2 block font-mono text-[10px] text-muted-foreground">
              {s.label}
            </span>
            <p className="text-sm font-medium">{s.items}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-medium text-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
