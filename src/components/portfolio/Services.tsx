import {
  Cloud,
  Component,
  Database,
  FlaskConical,
  Layers,
  Monitor,
  PenTool,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  layers: Layers,
  monitor: Monitor,
  component: Component,
  server: Server,
  database: Database,
  cloud: Cloud,
  figma: PenTool,
  sparkles: Sparkles,
  flask: FlaskConical,
};

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="Services"
          title="Area of Expertise"
          description="From responsive interfaces to APIs, cloud deployment, and AI-assisted product features."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Layers;
            return (
              <Reveal key={s.title} delay={i * 50}>
                <div className="glass card-hover group h-full rounded-2xl p-5">
                  <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-brand group-hover:text-primary-foreground">
                    <Icon className="size-4.5" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
