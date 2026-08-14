import { Github, Linkedin } from "lucide-react";
import { CONTACT, NAV_ITEMS } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto]">
        <div>
          <p className="flex items-center gap-2 text-base font-semibold">
            <span className="grid size-7 place-items-center rounded-lg bg-brand font-mono text-xs font-bold text-primary-foreground">
              V
            </span>
            {CONTACT.name}
          </p>
          <p className="mt-2 font-mono text-[12px] text-muted-foreground">{CONTACT.role}</p>
          <div className="mt-4 flex gap-2">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="size-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 md:grid-cols-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-[12px] text-muted-foreground sm:px-6">
        © 2026 {CONTACT.name}. All rights reserved.
      </p>
    </footer>
  );
}
