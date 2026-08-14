import { BookOpen, Building2, Gauge, Layers, PenTool, Sparkles, type LucideIcon } from "lucide-react";
import { WHY_ME } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  building: Building2,
  layers: Layers,
  figma: PenTool,
  gauge: Gauge,
  sparkles: Sparkles,
  book: BookOpen,
};

export function WhyMe() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading label="Value" title="Why Work With Me" />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_ME.map((w, i) => {
            const Icon = ICONS[w.icon] ?? Layers;
            return (
              <Reveal key={w.title} delay={i * 50}>
                <div className="glass card-hover h-full rounded-2xl p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-lg bg-secondary text-primary">
                      <Icon className="size-4.5" />
                    </span>
                    <h3 className="text-[15px] font-semibold">{w.title}</h3>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                    {w.body}
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
