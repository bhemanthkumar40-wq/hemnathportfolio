import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { ModuleHeading } from "@/components/ModuleHeading";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hemanth Kumar" },
      {
        name: "description",
        content:
          "Get in touch with Hemanth Kumar — Data Analyst. Reach out via email, LinkedIn or GitHub for data-driven collaboration.",
      },
      { property: "og:title", content: "Contact — Hemanth Kumar" },
      {
        property: "og:description",
        content: "Open for collaboration on data-driven projects.",
      },
    ],
  }),
  component: Contact,
});

const links = [
  { label: "Email", value: "yourmail@gmail.com", href: "mailto:yourmail@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/hemanth", href: profileLink("linkedin"), icon: Linkedin },
  { label: "GitHub", value: "github.com/hemanth", href: profileLink("github"), icon: Github },
];

function profileLink(key: "linkedin" | "github") {
  return profile[key];
}

function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-12">
      <ModuleHeading index="05" title="Contact Interface">
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Contact Me</h1>
      </ModuleHeading>

      <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] bg-accent p-8 text-accent-foreground">
          <h2 className="mb-2 text-3xl font-bold tracking-tight">Let's analyze.</h2>
          <p className="mb-6 text-sm text-accent-foreground/70">
            Open for collaboration on data-driven projects and analyst roles.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-block border-b-2 border-accent-foreground pb-1 font-mono text-xs font-bold uppercase tracking-wider"
          >
            Send Email
          </a>
        </div>

        <div className="space-y-3">
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/30"
              >
                <span className="grid size-10 place-items-center rounded-full border border-accent/20 text-accent">
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {l.label}
                  </span>
                  <span className="block truncate text-sm font-medium transition-colors group-hover:text-accent">
                    {l.value}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
