import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/lib/theme";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Certifications } from "@/components/portfolio/Certifications";
// AIJourney and WhyMe removed from main rendering per request
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Veeralakshmi S - Full-Stack Developer + AI";
const description =
  "Portfolio of Veeralakshmi S, Full-Stack Developer with 2 years of enterprise MERN, React, TypeScript and AWS experience, now building toward AI-powered full-stack development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
