import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl space-y-6 px-6 py-12">
        <div className="flex flex-wrap justify-center gap-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-accent">
            Email
          </a>
          <Link to="/contact" className="hover:text-accent">
            Contact
          </Link>
        </div>
        <p className="text-center font-mono text-[10px] text-muted-foreground/50">
          © 2026 HEMANTH KUMAR — DATA ANALYST PORTFOLIO
        </p>
      </div>
    </footer>
  );
}
