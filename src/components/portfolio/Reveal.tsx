import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {

          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  label,
  title,
  description,
  className,
}: {
  label: string;
  title: ReactNode;
  description?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("mx-auto max-w-2xl text-center", className)}>
      <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
        <span className="size-1.5 rounded-full bg-primary" />
        {label}
      </span>
      <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base text-muted-foreground text-pretty">{description}</p>
      ) : null}
    </Reveal>
  );
}
