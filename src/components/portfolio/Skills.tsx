import {
  Cloud,
  Code2,
  Database,
  LayoutDashboard,
  Server,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SKILL_GROUPS } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  layout: LayoutDashboard,
  server: Server,
  database: Database,
  cloud: Cloud,
  code: Code2,
  sparkles: Sparkles,
  wrench: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div
        className="glow-orb top-32 left-1/2 size-[28rem] -translate-x-1/2 -z-10"
        style={{ background: "var(--glow-1)" }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="Skills"
          title="Technical Toolkit"
          description="Categorized by where it sits in the stack - with AI clearly marked as an actively developing area."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = ICONS[group.icon] ?? Code2;
            const isAI = group.title === "AI";
            return (
              <Reveal key={group.title} delay={i * 60} className={isAI ? "sm:col-span-2" : ""}>
                <div
                  className={`glass card-hover h-full rounded-2xl p-5 ${isAI ? "relative overflow-hidden" : ""}`}
                >
                  {isAI ? (
                    <div
                      className="glow-orb -top-16 -right-10 size-52"
                      style={{ background: "var(--glow-2)" }}
                    />
                  ) : null}
                  <div className="flex items-center gap-3">
                    <span
                      className={
                        isAI
                          ? "grid size-9 place-items-center rounded-lg bg-brand text-primary-foreground"
                          : "grid size-9 place-items-center rounded-lg bg-secondary text-primary"
                      }
                    >
                      <Icon className="size-4.5" />
                    </span>
                    <h3 className="text-base font-semibold">{group.title}</h3>
                    {group.note ? (
                      <span className="ml-auto rounded-full border border-primary/40 px-2 py-0.5 font-mono text-[10px] text-primary">
                        {group.note}
                      </span>
                    ) : null}
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1.5 text-[12.5px] font-medium transition-colors hover:border-primary/50 hover:text-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
