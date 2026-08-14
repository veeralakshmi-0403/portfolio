import { ArrowRight, Bot, Braces, Cpu, Network, Rocket, Terminal } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const STEPS = [
  { label: "Software Engineering", icon: Terminal },
  { label: "Full-Stack Development", icon: Braces },
  { label: "AI Integration", icon: Network },
  { label: "AI-Powered Products", icon: Rocket },
];

const TOPICS = [
  "Generative AI",
  "AI application integration",
  "Python",
  "AI APIs",
  "Intelligent web applications",
  "Practical business use cases",
];

export function AIJourney() {
  return (
    <section id="ai" className="relative py-20 sm:py-28">
      <div
        className="glow-orb top-10 right-1/4 size-[26rem] -z-10"
        style={{ background: "var(--glow-2)" }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="Current Focus"
          title="Building Toward AI-Powered Development"
          description="Currently expanding full-stack development skills with Artificial Intelligence and Generative AI, exploring how intelligent capabilities can be integrated into practical web applications."
        />

        <Reveal className="mt-14">
          <div className="glass rounded-3xl p-6 sm:p-8">
            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <li key={s.label} className="relative">
                  <div className="flex h-full flex-col gap-3 rounded-2xl border border-border p-4">
                    <span className="grid size-10 place-items-center rounded-xl bg-brand text-primary-foreground">
                      <s.icon className="size-4.5" />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] text-muted-foreground">
                        step 0{i + 1}
                      </p>
                      <p className="mt-1 text-sm font-semibold">{s.label}</p>
                    </div>
                  </div>
                  {i < STEPS.length - 1 ? (
                    <ArrowRight
                      className="absolute top-1/2 -right-3 hidden size-4 -translate-y-1/2 text-primary lg:block"
                      aria-hidden="true"
                    />
                  ) : null}
                </li>
              ))}
            </ol>

            <div className="mt-8 grid gap-6 border-t border-border pt-8 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                  <Cpu className="size-3.5" /> Actively learning
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {TOPICS.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1.5 text-[12.5px] font-medium"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-primary/30 p-4">
                <Bot className="size-5 shrink-0 text-primary" />
                <p className="text-[13px] text-muted-foreground">
                  Learning in progress - not presented as professional AI experience.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
