import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import epms from "@/assets/project-epms.jpg";
import docbox from "@/assets/project-docbox.jpg";
import skilflo from "@/assets/project-skilflo.jpg";
import appstore from "@/assets/project-appstore.jpg";
import aiProject from "@/assets/project-ai.jpg";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

type Project = {
  name: string;
  subtitle: string;
  image: string;
  alt: string;
  description: string;
  tech: string[];
  role: string;
  features: string[];
  status?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Enterprise ePMS",
    subtitle: "Project Management Application",
    image: epms,
    alt: "Enterprise project management dashboard interface",
    description:
      "Enterprise project management application for tracking project workflows, revenues, approvals, resource allocation, and project-related activities.",
    tech: ["React.js", "Redux", "TypeScript", "MERN Stack", "AWS"],
    role: "Software Developer - primarily contributed to frontend development, application features, state management, and API integration.",
    features: [
      "Role-based access control",
      "Project workflow management",
      "Revenue tracking",
      "Approval workflows",
      "Resource allocation",
      "Performance optimization",
      "Redux caching",
    ],
  },
  {
    name: "Sify DocBox",
    subtitle: "Secure File Management System",
    image: docbox,
    alt: "Secure cloud file management dashboard interface",
    description:
      "Secure file management platform designed for administrators and end users to organize, access, and manage files.",
    tech: ["React.js", "JavaScript", "TypeScript", "MERN Stack"],
    role: "Software Developer - developed the frontend and UI and contributed to creating an intuitive user experience.",
    features: [
      "File organization",
      "File access",
      "File management",
      "Admin and end-user experiences",
      "Responsive UI",
    ],
  },
  {
    name: "SkilFlo",
    subtitle: "Theming & UI Development",
    image: skilflo,
    alt: "Design system theme customization interface",
    description: "Worked on the application's overall theming and user interface.",
    tech: ["React.js", "JavaScript", "TypeScript", "CSS", "Figma"],
    role: "Software Developer",
    features: [
      "AI-driven color palette customization",
      "Manual color customization",
      "Dynamic theming",
      "Consistent UI experience",
    ],
  },
  {
    name: "Sify AppStore",
    subtitle: "Digital Application Marketplace",
    image: appstore,
    alt: "Internal application marketplace interface",
    description:
      "Internal digital application marketplace similar to an app store, allowing users to discover, download, and manage applications.",
    tech: ["React.js", "JavaScript", "TypeScript", "MERN Stack"],
    role: "Software Developer - frontend development and UI implementation.",
    features: [
      "Application discovery",
      "Application downloads",
      "Application management",
      "Intuitive marketplace interface",
    ],
  },
  {
    name: "AI-Powered Full-Stack Application",
    subtitle: "Currently Learning & Building",
    status: "In development",
    image: aiProject,
    alt: "Abstract visual of an AI assistant connected to APIs and databases",
    description:
      "An upcoming AI-powered full-stack application demonstrating the integration of AI and Generative AI capabilities with modern full-stack engineering.",
    tech: [
      "MERN Stack",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "AI/Generative AI",
    ],
    role: "Goal - build practical AI-powered applications that combine modern AI capabilities with strong full-stack engineering to solve real-world business problems.",
    features: [
      "Generative AI integration",
      "AI APIs in full-stack workflows",
      "Practical business use cases",
    ],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const isAI = Boolean(project.status);

  return (
    <Reveal delay={index * 60}>
      <article
        className={cn(
          "glass card-hover group relative overflow-hidden rounded-3xl",
          isAI && "sm:col-span-2",
        )}
      >
        <div className="relative aspect-16/10 overflow-hidden">
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            width={1280}
            height={800}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          {isAI ? (
            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-primary-foreground">
              <Sparkles className="size-3" /> Currently Learning &amp; Building
            </span>
          ) : null}
        </div>

        <div className="p-6">
          <p className="font-mono text-[11px] tracking-[0.14em] text-primary uppercase">
            {project.subtitle}
          </p>
          <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
          <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
          >
            {open ? "Hide Details" : "View Details"}
            <ChevronDown
              className={cn("size-4 transition-transform", open && "rotate-180")}
              aria-hidden="true"
            />
          </button>

          <div
            className={cn(
              "grid overflow-hidden transition-all duration-500",
              open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="min-h-0">
              <div className="rounded-2xl border border-border p-4">
                <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                  Role
                </p>
                <p className="mt-1.5 text-[13.5px]">{project.role}</p>
                <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                  Key features
                </p>
                <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13.5px]">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="Projects"
          title="Featured Projects"
          description="Enterprise applications delivered in a professional environment, plus what I'm building next with AI."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
