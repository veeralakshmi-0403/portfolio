import { useState } from "react";
import { CheckCircle2, FileDown, Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { CONTACT } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(3, "Please add a short subject").max(150),
  message: z.string().trim().min(10, "Tell me a little more (10+ characters)").max(1000),
});

type Fields = z.infer<typeof schema>;
const EMPTY: Fields = { name: "", email: "", subject: "", message: "" };

const DETAILS = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:+91${CONTACT.phone}` },
  { icon: MapPin, label: "Location", value: CONTACT.location },
];

export function Contact() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = (key: keyof Fields, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    if (status === "sent") setStatus("idle");
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof Fields, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Fields;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setStatus("sending");
    const { name, email, subject, message } = parsed.data;

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

    // If no endpoint configured, fallback to mailto to preserve existing behavior
    if (!endpoint) {
      const body = `${message}\n\n- ${name} (${email})`;
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.setTimeout(() => {
        setStatus("sent");
        setValues(EMPTY);
        toast.success("Opened email client");
      }, 600);
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        setStatus("sent");
        setValues(EMPTY);
        toast.success("Message sent — thank you!");
      } else {
        const text = await res.text().catch(() => "");
        console.error("Formspree error:", res.status, text);
        toast.error("Failed to send message — please try again later.");
        setStatus("idle");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error — please try again.");
      setStatus("idle");
    }
  };

  const field =
    "mt-1.5 w-full rounded-xl border border-input bg-background/60 px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div
        className="glow-orb -bottom-20 left-1/3 size-[28rem] -z-10"
        style={{ background: "var(--glow-1)" }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Intelligent"
          description="Have a project, opportunity, or idea? I'd love to connect and explore how modern full-stack development and AI can turn it into a practical solution."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <Reveal className="space-y-4">
            <div className="glass rounded-3xl p-6">
              <ul className="space-y-4">
                {DETAILS.map((d) => (
                  <li key={d.label} className="flex items-start gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                      <d.icon className="size-4.5" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] text-muted-foreground">{d.label}</p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="block truncate text-sm font-medium hover:text-primary"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{d.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-3.5 py-2 text-[13px] font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </a>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-3.5 py-2 text-[13px] font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  <Github className="size-4" /> GitHub
                </a>
              </div>

              <a
                href={CONTACT.resume}
                download
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <FileDown className="size-4" /> Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-[13px] font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    value={values.name}
                    onChange={(e) => update("name", e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={cn(field, errors.name && "border-destructive")}
                    placeholder="Your name"
                  />
                  {errors.name ? (
                    <p id="name-error" className="mt-1.5 text-[12px] text-destructive">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email" className="text-[13px] font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={cn(field, errors.email && "border-destructive")}
                    placeholder="you@company.com"
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-1.5 text-[12px] text-destructive">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="text-[13px] font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  value={values.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className={cn(field, errors.subject && "border-destructive")}
                  placeholder="Opportunity, project or collaboration"
                />
                {errors.subject ? (
                  <p id="subject-error" className="mt-1.5 text-[12px] text-destructive">
                    {errors.subject}
                  </p>
                ) : null}
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="text-[13px] font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => update("message", e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={cn(field, "resize-y", errors.message && "border-destructive")}
                  placeholder="Tell me about the role, project or idea..."
                />
                {errors.message ? (
                  <p id="message-error" className="mt-1.5 text-[12px] text-destructive">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto"
              >
                {status === "sending" ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
                Send Message
              </button>

              <p aria-live="polite" className="mt-4 min-h-5 text-[13px]">
                {status === "sent" ? (
                  <span className="inline-flex items-center gap-2 text-primary">
                    <CheckCircle2 className="size-4" /> Your message has been sent successfully. Thank you for reaching out!
                  </span>
                ) : null}
              </p>
              <Toaster />
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
