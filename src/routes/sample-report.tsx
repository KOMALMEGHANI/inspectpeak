import { createFileRoute } from "@tanstack/react-router";
import {
  Camera,
  Eye,
  FileCheck2,
  MapPin,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/sample-report")({
  head: () => ({
    meta: [
      {
        title: "Sample Inspection Report | What You Receive — INSPECTPEAK",
      },
      {
        name: "description",
        content:
          "Preview an INSPECTPEAK inspection report: photographic observations with locations, severity levels and practical recommendations — every finding documented.",
      },
      {
        property: "og:title",
        content: "Sample Inspection Report — INSPECTPEAK",
      },
      {
        property: "og:description",
        content:
          "Know exactly what your inspection report will look like before you book.",
      },
      { property: "og:url", content: "/sample-report" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sample-report" }],
  }),
  component: SampleReportPage,
});

const severity = [
  { label: "High", count: 2, class: "bg-destructive/15 text-destructive" },
  { label: "Moderate", count: 5, class: "bg-amber-soft text-foreground" },
  { label: "Minor", count: 9, class: "bg-navy-soft text-primary" },
] as const;

const observations = [
  "Diagonal crack on balcony column — recommend engineer review",
  "Seepage stains on master bedroom ceiling — tracing source",
  "Hollow-sounding floor tiles near kitchen — 3 locations",
  "Bathroom door frame swelling at bottom rail — moisture suspected",
] as const;

const reportIncludes = [
  {
    Icon: Camera,
    title: "Photographic evidence",
    text: "Every observation is photographed on site, so nothing depends on memory or description alone.",
  },
  {
    Icon: MapPin,
    title: "Exact location",
    text: "Each finding is mapped to the room, wall or element it was recorded on — ready to hand to a contractor.",
  },
  {
    Icon: Warning,
    title: "Severity level",
    text: "High, moderate or minor — so you know what needs immediate attention and what can wait.",
  },
  {
    Icon: FileCheck2,
    title: "Recommended next steps",
    text: "Practical actions per finding: what to monitor, what to repair, and when specialist follow-up is worth it.",
  },
] as const;

function SampleReportPage() {
  return (
    <>
      {/* Hero */}
      <section className="blueprint-grid bg-navy px-4 pb-16 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-amber">
              Sample Report
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              Know Exactly What Your Report Will Look Like
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              Every INSPECTPEAK inspection ends with a written report —
              organised observations with photographs, severity levels and
              recommended next steps.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sample mock report */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal className="overflow-hidden rounded-xl border bg-card shadow-[0_20px_50px_-20px_oklch(0.24_0.014_250/0.35)]">
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
            <div className="flex flex-wrap gap-2 px-5 py-4">
              {severity.map((s) => (
                <span
                  key={s.label}
                  className={`rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${s.class}`}
                >
                  {s.count} {s.label}
                </span>
              ))}
            </div>
            <div className="space-y-3 px-5 pb-5">
              {observations.map((obs) => (
                <div
                  key={obs}
                  className="flex items-start gap-2.5 rounded-lg border bg-background p-3"
                >
                  <Eye className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/60" />
                  <p className="text-xs leading-relaxed text-foreground/80">
                    {obs}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Illustrative sample — not an actual client report
          </p>
        </div>
      </section>

      {/* What the report includes */}
      <section className="bg-muted/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Inside the Report"
            title="Every Finding, Fully Documented"
            description="Four things you can rely on in every INSPECTPEAK report — no vague notes, no undocumented opinions."
          />
          <Reveal className="reveal-stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reportIncludes.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-sm font-bold leading-snug text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-3xl rounded-xl border-l-4 border-amber bg-amber-soft/50 p-5">
            <p className="text-sm leading-relaxed text-foreground/80">
              Reports are delivered for properties inspected across{" "}
              {siteConfig.serviceArea}. The sample above shows the structure —
              your actual report will carry the observations from your own
              property, with the same severity levels and recommendations.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="py-16">
        <CTASection
          title="Want a Report Like This for Your Property?"
          description="Book an inspection and we'll document every detail before you commit."
          secondaryLabel="Contact Us"
          secondaryTo="/contact"
        />
      </div>
    </>
  );
}
