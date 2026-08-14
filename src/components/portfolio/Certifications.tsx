
import { Award, BadgeCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Certifications() {
  const openCertificate = (pdfUrl?: string) => {
    if (!pdfUrl || !pdfUrl.trim()) return;

    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="certifications" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading label="Certifications" title="Certifications" />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => {
            const hasPdf = Boolean(c.pdfUrl && c.pdfUrl.trim());

            return (
              <Reveal key={c.title} delay={i * 60}>
                <div
                  role={hasPdf ? "button" : undefined}
                  tabIndex={hasPdf ? 0 : undefined}
                  onClick={() => openCertificate(c.pdfUrl)}
                  onKeyDown={(e) => {
                    if (hasPdf && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      openCertificate(c.pdfUrl);
                    }
                  }}
                  className={`glass card-hover flex h-full items-start gap-4 rounded-2xl p-5 ${
                    hasPdf
                      ? "cursor-pointer transition-all hover:border-primary/50"
                      : ""
                  }`}
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    {i === 0 ? (
                      <Award className="size-5" />
                    ) : (
                      <BadgeCheck className="size-5" />
                    )}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-[14.5px] font-semibold">
                      {c.title}
                    </h3>

                    <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                      {c.issuer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}