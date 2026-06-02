import { createFileRoute } from "@tanstack/react-router";
import { ModuleHeading } from "@/components/ModuleHeading";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Hemanth Kumar" },
      {
        name: "description",
        content:
          "Data analytics projects by Hemanth Kumar: Blinkit Sales, HR Analytics, Ola Ride Analytics and Meta Ads dashboards.",
      },
      { property: "og:title", content: "Projects — Hemanth Kumar" },
      {
        property: "og:description",
        content: "Interactive Power BI, SQL and Python dashboard projects.",
      },
      { property: "og:image", content: projects[0].image },
      { name: "twitter:image", content: projects[0].image },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-12">
      <ModuleHeading index="03" title="Selected Work">
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Projects</h1>
      </ModuleHeading>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {projects.map((p, i) => (
          <article key={p.title} className="group space-y-4">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface outline outline-1 -outline-offset-1 outline-white/5 transition-all group-hover:outline-accent/30">
              <img
                src={p.image}
                alt={`${p.title} preview`}
                loading="lazy"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] text-accent">
                  0{i + 1} — 0{projects.length}
                </span>
                <h2 className="mt-1 text-lg font-bold">{p.title}</h2>
                <p className="text-sm text-muted-foreground">{p.subtitle}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-foreground/75">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
