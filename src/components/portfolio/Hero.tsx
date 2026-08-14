import { ArrowRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";
import { CONTACT } from "@/lib/portfolio-data";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const STACK = ["React", "TypeScript", "Node.js", "MongoDB", "AWS", "Gen AI"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="grid-bg absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <div
        className="glow-orb -top-24 -left-24 size-[26rem] -z-10"
        style={{ background: "var(--glow-1)" }}
      />
      <div
        className="glow-orb top-16 -right-20 size-[24rem] -z-10"
        style={{ background: "var(--glow-2)" }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] tracking-wide">
            <span className="size-2 animate-pulse-dot rounded-full bg-primary" />
            Open to Opportunities · Currently Building with AI
          </span>

          <h1 className="mt-6 text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-6xl">
            Full-Stack Developer + AI
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            Software Developer with 2 years of experience building enterprise applications using
            React, TypeScript, Node.js, MongoDB, and AWS. Currently expanding into AI and Generative
            AI to build practical, intelligent full-stack applications that solve real-world business
            problems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              View My Work <ArrowRight className="size-4" />
            </a>
            <a
              href={CONTACT.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              <FileDown className="size-4" /> View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-primary hover:underline"
            >
              <Mail className="size-4" /> Let&apos;s Connect
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="grid size-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="grid size-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="size-4" />
            </a>
            <div className="h-px flex-1 bg-border" />
            <ul className="hidden flex-wrap gap-1.5 sm:flex">
              {STACK.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="glass relative overflow-hidden rounded-3xl p-2 shadow-lift">
            <img
              src={heroVisual}
              alt="Abstract illustration of code panels, cloud services and a neural network graph"
              width={1024}
              height={1024}
              className="w-full rounded-2xl object-cover"
            />

            {/* Profile avatar (prominent, circular, responsive) */}
            <div className="absolute top-6 left-6 z-20">
              <Avatar className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 shadow-lg ring-1 ring-primary/30 dark:ring-white/10 overflow-hidden">
                <AvatarImage
                  src="https://i.postimg.cc/X7rdCC0W/Whats-App-Image-2026-08-12-at-8-34-50-PM.jpg"
                  alt="Profile photo — Veeralakshmi"
                  className="object-cover"
                  loading="lazy"
                />
                <AvatarFallback>VS</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="glass-strong animate-float-slow absolute bottom-6 left-3 rounded-2xl px-4 py-3 shadow-soft sm:left-6">
            <p className="font-mono text-[11px] text-muted-foreground">experience</p>
            <p className="text-lg font-semibold">2 Years · MERN</p>
          </div>

          <div
            className="glass-strong animate-float-slow absolute top-4 right-3 rounded-2xl px-4 py-3 shadow-soft sm:top-6 sm:right-5"
            style={{ animationDelay: "1.2s" }}
          >
            <p className="font-mono text-[11px] text-muted-foreground">now learning</p>
            <p className="text-lg font-semibold">Generative AI</p>
          </div>

          <pre className="glass mt-6 hidden overflow-x-auto rounded-2xl p-4 font-mono text-[11px] leading-relaxed text-muted-foreground sm:block">
            <code>{`const veeralakshmi = {
  role: "Full-Stack Developer + AI",
  stack: ["React", "TypeScript", "Node", "MongoDB", "AWS"],
  learning: ["Generative AI", "Python"],
};`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
