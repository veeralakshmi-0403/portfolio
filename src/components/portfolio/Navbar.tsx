import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, FileDown } from "lucide-react";
import { CONTACT, NAV_ITEMS } from "@/lib/portfolio-data";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(`#${hit.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0.01, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Main navigation"
        className={cn(
          "mx-auto flex max-w-6xl items-center gap-3 rounded-2xl px-3 py-2 transition-all duration-300 sm:px-4",
          scrolled ? "glass-strong shadow-soft" : "border border-transparent",
        )}
      >
        <a href="#home" className="flex min-w-0 items-center gap-2 pr-1">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand font-mono text-sm font-bold text-primary-foreground">
            V
          </span>
          <span className="truncate text-sm font-semibold sm:text-base">{CONTACT.name}</span>
        </a>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "rounded-lg px-2.5 py-1.5 text-[13px] font-medium transition-colors",
                  active === item.href
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <a
            href={CONTACT.resume}
            download
            className="hidden items-center gap-2 rounded-lg bg-brand px-3.5 py-2 text-[13px] font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <FileDown className="size-4" /> Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass-strong mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl p-2 shadow-soft lg:hidden">
          <ul className="grid grid-cols-2 gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={CONTACT.resume}
            download
            className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-brand px-3 py-2.5 text-sm font-semibold text-primary-foreground sm:hidden"
          >
            <FileDown className="size-4" /> Download Resume
          </a>
        </div>
      ) : null}
    </header>
  );
}
