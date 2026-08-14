import { Building2, CalendarDays, Check, GraduationCap, MapPin } from "lucide-react";
import { EXPERIENCE_TASKS } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="Experience"
          title="Professional Experience"
          description="Enterprise product work: cloud-hosted applications built with the MERN stack, TypeScript and AWS."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.62fr_0.38fr]">
          <Reveal>
            <article className="glass relative rounded-3xl p-6 sm:p-8">
              <span className="absolute inset-y-6 left-0 w-px bg-brand" aria-hidden="true" />
              <div className="flex flex-wrap items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand text-primary-foreground">
                  <Building2 className="size-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold">Software Developer</h3>
                  <p className="text-sm text-primary">Sify Technologies Limited</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground">
                  <CalendarDays className="size-3.5" /> July 2023 – May 2025
                </span>
              </div>

              <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
                Worked as a Software Developer building and maintaining cloud-hosted enterprise
                applications using the MERN stack, TypeScript, JavaScript, and AWS. Developed
                responsive user interfaces, secure RESTful APIs and microservices, and contributed to
                testing, deployment, and UI/UX implementation.
              </p>

              <h4 className="mt-7 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                Key responsibilities
              </h4>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {EXPERIENCE_TASKS.map((task) => (
                  <li key={task} className="flex items-start gap-2 text-[13.5px]">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="glass card-hover h-full rounded-3xl p-6 sm:p-8">
              <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary">
                <GraduationCap className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">
                B.E. - Computer Science and Engineering
              </h3>
              <p className="mt-1 text-sm text-primary">Sri Sriram Institute of Technology</p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5" /> Chennai
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border p-3">
                  <dt className="font-mono text-[11px] text-muted-foreground">Graduated</dt>
                  <dd className="mt-1 text-lg font-semibold">2023</dd>
                </div>
                <div className="rounded-xl border border-border p-3">
                  <dt className="font-mono text-[11px] text-muted-foreground">CGPA</dt>
                  <dd className="mt-1 text-lg font-semibold">9.12 / 10</dd>
                </div>
              </dl>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
