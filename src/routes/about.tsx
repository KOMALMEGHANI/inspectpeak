import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  FileCheck2,
  SearchCheck,
  ShieldCheck,
  Eye,
  ClipboardCheck,
  Handshake,
} from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import inProgressImg from "@/assets/gallery-inprogress.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      {
        title: `About ${siteConfig.name} — Property Inspection & Building Assessment`,
      },
      {
        name: "description",
        content:
          "INSPECTPEAK is a professional property inspection and building assessment brand helping homebuyers, homeowners and property investors in India make informed, well-documented decisions.",
      },
      {
        property: "og:title",
        content: `About ${siteConfig.name} — Property Inspection & Building Assessment`,
      },
      {
        property: "og:description",
        content:
          "A property inspection brand built on engineering discipline — quality, transparency, attention to detail and reliable reporting.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const commitments = [
  {
    Icon: ShieldCheck,
    title: "Quality",
    text: "Every check follows a defined scope and method — no rushed walk-throughs, no skipped corners.",
  },
  {
    Icon: Eye,
    title: "Transparency",
    text: "You see exactly what we saw. Observations are photographed and reported as they are, without softening.",
  },
  {
    Icon: SearchCheck,
    title: "Attention to Detail",
    text: "From hairline cracks to tile levelling, small signs often tell the biggest stories — we look for all of them.",
  },
  {
    Icon: FileCheck2,
    title: "Reliable Reporting",
    text: "Written reports with locations, photographs, severity levels and recommendations you can act on.",
  },
] as const;

const audiences = [
  {
    Icon: ClipboardCheck,
    title: "Homebuyers",
    text: "Independent due diligence before you sign — defects, quality and risks documented before the money moves.",
  },
  {
    Icon: Handshake,
    title: "Homeowners",
    text: "Understanding your home's visible condition — dampness, cracks, finishes — and what to fix first.",
  },
  {
    Icon: FileCheck2,
    title: "Property Investors",
    text: "Objective condition assessment for resale purchases, rentals and portfolio decisions.",
  },
] as const;

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="blueprint-grid bg-navy px-4 pb-16 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-amber">
              About Us
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Every Detail. Inspected.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              {siteConfig.name} is a professional property inspection and building assessment brand
              focused on helping homebuyers, homeowners and property investors make informed
              decisions.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-white/60">
              A home purchase involves lakhs of rupees and years of your life. Yet most buyers see a
              property only once or twice before committing. We bridge that gap with a structured,
              engineering-led inspection that documents the property's visible condition — clearly,
              honestly and photographically.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">
                  Book an Inspection
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/sample-report">View Sample Report</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal
            delay={100}
            className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          >
            <img
              src={aboutImg}
              alt="INSPECTPEAK engineers reviewing structural drawings at a project site office"
              width={1600}
              height={1072}
              loading="eager"
              decoding="async"
              className="img-reveal aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Our approach */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading kicker="Our Commitment" title="What We Hold Every Inspection To" />
          <Reveal className="reveal-stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-base font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Who we work for */}
      <section className="bg-muted/60 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Who We Work For"
            title="Built Around Your Decision"
            description="Our role is the same in every case: give you an accurate, documented picture of the property's condition so your decision rests on facts."
          />
          <Reveal className="reveal-stagger mt-12 grid gap-6 lg:grid-cols-3">
            {audiences.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-xl border bg-card p-7 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-12 grid items-center gap-8 overflow-hidden rounded-2xl border bg-card shadow-sm lg:grid-cols-[1fr_1.2fr]">
            <img
              src={inProgressImg}
              alt="Engineer recording observations on a tablet during a building inspection"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="img-reveal h-full w-full object-cover"
            />
            <div className="p-8 lg:p-10">
              <h3 className="text-xl font-bold text-foreground">How we work on site</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Inspections are performed in person, at the property, by our inspection team. We
                follow a fixed scope for the service you book, photograph every observation, and
                grade each finding by severity. What we observe and report is limited to what can be
                seen and documented on site — we do not claim laboratory testing or specialised
                structural testing.
              </p>
              <Button variant="link" asChild className="mt-4 h-auto p-0 text-primary">
                <Link to="/sample-report">
                  See what a report contains
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Let's Inspect Your Property"
        description="Tell us about the property and what matters most to you — we'll propose the right inspection scope."
      />
    </>
  );
}
