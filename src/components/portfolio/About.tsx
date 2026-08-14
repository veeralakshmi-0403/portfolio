import { Briefcase, Cloud, Layers, Sparkles, Building2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const HIGHLIGHTS = [
  { icon: Briefcase, title: "2 Years Professional Experience", note: "Full-stack development" },
  { icon: Layers, title: "MERN Stack Developer", note: "React · Node · Express · MongoDB" },
  { icon: Building2, title: "Enterprise Application Experience", note: "Cloud-hosted products" },
  { icon: Cloud, title: "AWS Certified Developer", note: "Associate" },
  { icon: Sparkles, title: "AI / Generative AI", note: "Currently learning", accent: true },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="About"
          title="About Me"
          description="Full-stack engineering fundamentals, real enterprise delivery, and an active move toward AI-powered products."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a Software Developer with around 2 years of professional experience in
              full-stack development. My work has focused on building and maintaining enterprise
              applications - responsive user interfaces, secure REST APIs, and cloud-hosted
              applications used in real organizational environments.
            </p>
            <p>
              Day to day, that meant React application development with Redux state management,
              TypeScript across the codebase, API integration, UI/UX implementation from Figma
              designs, unit and integration testing, and CI/CD workflows on AWS.
            </p>
            <p>
              I&apos;m now actively expanding my knowledge of AI and Generative AI, with the goal of
              combining strong software engineering fundamentals with modern AI technologies as an
              AI-powered Full-Stack Developer.
            </p>
            <blockquote className="glass rounded-2xl border-l-2 border-l-primary p-5 text-foreground">
              <p className="text-[15px] font-medium">
                &ldquo;AI should solve real business problems - not simply be added as a
                feature.&rdquo;
              </p>
            </blockquote>
          </Reveal>

          <div className="space-y-3">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={i * 70}>
                <div className="glass card-hover flex items-center gap-4 rounded-2xl p-4">
                  <span
                    className={
                      h.accent
                        ? "grid size-11 shrink-0 place-items-center rounded-xl bg-brand text-primary-foreground"
                        : "grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary"
                    }
                  >
                    <h.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{h.title}</p>
                    <p className="font-mono text-[11px] text-muted-foreground">{h.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
