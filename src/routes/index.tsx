import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Eye,
  FileCheck2,
  HardHat,
  Handshake,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import heroImg from "@/assets/hero-inspection.jpg";
import aboutImg from "@/assets/about-team.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PricingSection } from "@/components/PricingSection";
import { Gallery } from "@/components/Gallery";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTASection } from "@/components/CTASection";
import { inspectionServices } from "@/lib/services-data";
import { galleryItems } from "@/lib/gallery-data";
import { faqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      {
        title: `${siteConfig.name} — Home Inspection Services in Bhopal & Indore | Buy Your Dream Home with Confidence`,
      },
      {
        name: "description",
        content:
          "Professional home inspection services in Bhopal & Indore, Madhya Pradesh. Pre-purchase home inspection, structural inspection, waterproofing & leakage checks and snagging inspection before buying — clear reports, engineering-led assessments.",
      },
      {
        property: "og:title",
        content: `${siteConfig.name} — Home Inspection Services in Bhopal & Indore`,
      },
      {
        property: "og:description",
        content:
          "Identify hidden defects, construction quality issues and structural concerns before they become expensive problems in Bhopal & Indore.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: `${siteConfig.name} — Home Inspection Services in Bhopal & Indore`,
      },
      {
        name: "twitter:description",
        content:
          "Identify hidden defects, construction quality issues and structural concerns before they become expensive problems in Bhopal & Indore.",
      },
      {
        name: "keywords",
        content:
          "home inspection, home inspection services in India, home inspection before buying, property inspection Bhopal, property inspection Indore, home inspection Bhopal, home inspection Indore, building inspection Bhopal, building inspection Indore, house inspection services, snagging inspection Bhopal, snagging inspection Indore, structural inspection, pre-purchase home inspection, waterproofing inspection, INSPECTPEAK, home inspection Madhya Pradesh, new home inspection, resale property inspection",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://inspectpeak.lovable.app/#business",
          name: siteConfig.name,
          slogan: siteConfig.tagline,
          description: siteConfig.description,
          url: "https://inspectpeak.lovable.app/",
          telephone: "+917554328447",
          email: siteConfig.email,
          address: [
            {
              "@type": "PostalAddress",
              addressLocality: "Bhopal",
              addressRegion: "Madhya Pradesh",
              addressCountry: "IN",
            },
            {
              "@type": "PostalAddress",
              addressLocality: "Indore",
              addressRegion: "Madhya Pradesh",
              addressCountry: "IN",
            },
          ],
          areaServed: ["Bhopal", "Indore", "Madhya Pradesh"],
          knowsAbout: [
            "Home inspection",
            "Pre-purchase home inspection",
            "Structural inspection",
            "Waterproofing and leakage inspection",
            "Snagging inspection",
          ],
          priceRange: "₹₹",
        }),
      },
    ],
  }),
  component: HomePage,
});

const trustHighlights = [
  {
    Icon: SearchCheck,
    title: "Detailed Property Inspection",
    text: "Systematic, room-by-room checks — nothing important is left to guesswork.",
  },
  {
    Icon: HardHat,
    title: "Professional Engineering Approach",
    text: "Civil-engineering-led assessments of structure, workmanship and quality.",
  },
  {
    Icon: FileCheck2,
    title: "Clear Inspection Reports",
    text: "Written findings with photographs, severity levels and practical recommendations.",
  },
] as const;

const whyChoose = [
  {
    Icon: Building2,
    title: "Engineering-oriented inspection process",
    text: "Assessments grounded in civil engineering fundamentals — not a superficial checklist.",
  },
  {
    Icon: SearchCheck,
    title: "Detailed observations & photographic evidence",
    text: "Every finding is documented with its location, a photograph and a severity level.",
  },
  {
    Icon: MessageSquareText,
    title: "Transparent communication",
    text: "We explain what we observed, what it means and what we recommend — in plain language.",
  },
  {
    Icon: ClipboardCheck,
    title: "Practical recommendations",
    text: "Actionable next steps — what to monitor, what to repair, and when specialist follow-up is worth it.",
  },
  {
    Icon: Handshake,
    title: "Support for homebuyers and homeowners",
    text: "Whether you're buying, taking possession or maintaining a home, we work for your decision.",
  },
] as const;

const mockSeverity = [
  { label: "High", count: 2, class: "bg-destructive/15 text-destructive" },
  { label: "Moderate", count: 5, class: "bg-amber-soft text-foreground" },
  { label: "Minor", count: 9, class: "bg-navy-soft text-primary" },
] as const;

function HomePage() {
  return (
    <>
      {/* ============ Hero ============ */}
      <section className="blueprint-grid-light relative overflow-hidden bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pb-24 lg:pt-20">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-primary/70">
              Property Inspection · {siteConfig.serviceArea}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Buy Your Dream Home{" "}
              <span className="relative whitespace-nowrap">
                with Confidence.
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-amber/40"
                />
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We help you identify hidden defects, construction quality issues and potential
              structural concerns before they become expensive problems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">
                  Book a Home Inspection
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30"
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Our Services
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative overflow-hidden rounded-2xl border shadow-[0_24px_60px_-24px_oklch(0.25_0.055_265/0.4)]">
              <img
                src={heroImg}
                alt="Professional engineer inspecting the facade of a modern Indian residential property"
                width={1920}
                height={1080}
                decoding="async"
                fetchPriority="high"
                className="img-kenburns aspect-[16/11] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-navy-deep/90 to-transparent px-5 pb-4 pt-14">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-amber sm:text-xs">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>
            {/* amber corner accent */}
            <div
              aria-hidden="true"
              className="absolute -left-3 -top-3 h-20 w-20 rounded-tl-2xl border-l-4 border-t-4 border-amber"
            />
          </Reveal>
        </div>

        {/* Trust highlights */}
        <Reveal className="reveal-stagger mx-auto grid max-w-7xl gap-px overflow-hidden rounded-t-xl border border-b-0 bg-border sm:grid-cols-3 lg:mx-auto lg:max-w-7xl">
          {trustHighlights.map(({ Icon, title, text }) => (
            <div key={title} className="bg-card p-6 lg:p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-soft text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="mt-3 text-sm font-bold text-foreground sm:text-base">{title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ============ About teaser ============ */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <img
              src={aboutImg}
              alt="INSPECTPEAK engineers reviewing structural drawings at a project site office"
              width={1600}
              height={1072}
              loading="lazy"
              decoding="async"
              className="img-reveal aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-br-2xl border-b-4 border-r-4 border-amber sm:block"
            />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary/70">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              An inspection brand built on engineering discipline
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              INSPECTPEAK is a professional property inspection and building assessment brand
              focused on helping homebuyers, homeowners and property investors make informed
              decisions. We assess what can be seen, measured and documented — and we tell you
              exactly what we found.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our commitment is simple: quality in every check, transparency in every finding,
              obsessive attention to detail, and reporting you can act on with confidence.
            </p>
            <Button variant="link" asChild className="mt-4 h-auto p-0 text-primary">
              <Link to="/about">
                More about INSPECTPEAK
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ============ Inspection services ============ */}
      <section id="services" className="bg-muted/60 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Our Services"
            title="Inspection Services"
            description="Focused assessments for every stage of property ownership — from pre-purchase due diligence to pre-handover snag lists."
          />
          <Reveal className="reveal-stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {inspectionServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ Process ============ */}
      <section className="blueprint-grid bg-navy-deep px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Our Inspection Process"
            title="From First Call to Final Report"
            dark
            description="A consistent, documented four-step process — so you always know what happens next."
          />
          <div className="mt-12">
            <ProcessSteps dark />
          </div>
        </div>
      </section>

      {/* ============ Pricing & Packages ============ */}
      <PricingSection className="bg-muted/40" />

      {/* ============ Sample report teaser ============ */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary/70">
              Sample Inspection Report
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Know exactly what your report will look like
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Every INSPECTPEAK inspection ends with a written report: organised observations with
              photographs, severity levels and recommended next steps. Preview a professionally
              designed sample before you book — all example findings are clearly labelled as
              illustrative samples.
            </p>
            <Button variant="accent" size="lg" asChild className="mt-7">
              <Link to="/sample-report">
                View Sample Report
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>

          {/* Mock report card */}
          <Reveal delay={100} className="mx-auto w-full max-w-lg">
            <div className="overflow-hidden rounded-xl border bg-card shadow-[0_20px_50px_-20px_oklch(0.25_0.055_265/0.35)]">
              <div className="card-top-rule flex items-center justify-between bg-navy px-5 py-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-amber">
                    Inspection Report · Sample
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-white">
                    3 BHK Apartment · Pre-purchase Inspection
                  </p>
                </div>
                <ShieldCheck className="h-7 w-7 text-amber" />
              </div>
              <div className="flex gap-2 px-5 py-4">
                {mockSeverity.map((s) => (
                  <span
                    key={s.label}
                    className={`rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${s.class}`}
                  >
                    {s.count} {s.label}
                  </span>
                ))}
              </div>
              <div className="space-y-3 px-5 pb-5">
                {[
                  "Diagonal crack on balcony column — recommend engineer review",
                  "Seepage stains on master bedroom ceiling — tracing source",
                  "Hollow-sounding floor tiles near kitchen — 3 locations",
                ].map((obs) => (
                  <div
                    key={obs}
                    className="flex items-start gap-2.5 rounded-lg border bg-background p-3"
                  >
                    <Eye className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/60" />
                    <p className="text-xs leading-relaxed text-foreground/80">{obs}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              Illustrative sample — not an actual client report
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ Why choose ============ */}
      <section className="bg-muted/60 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Why Choose INSPECTPEAK?"
            title="Inspection You Can Base a Decision On"
          />
          <Reveal className="reveal-stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {whyChoose.map(({ Icon, title, text }, i) => (
              <div
                key={title}
                className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={i >= 3 ? { gridColumn: "auto" } : undefined}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-sm font-bold leading-snug text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ Gallery ============ */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Gallery"
            title="Our Work, Documented"
            description="Real inspection contexts — cracks, moisture, finishing quality, drawings and sites in progress."
          />
          <div className="mt-10">
            <Gallery items={galleryItems} />
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-muted/60 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="FAQ"
            title="Good questions. Clear answers."
            description="The questions homebuyers and homeowners ask us most — answered plainly."
          />
          <div className="mt-12">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <div className="py-20">
        <CTASection
          title="Book Your Inspection Today"
          description="Share your property details and preferred date — we'll confirm the slot and scope before the visit."
          secondaryLabel="Chat on WhatsApp"
          secondaryTo="/contact"
        />
      </div>
    </>
  );
}
