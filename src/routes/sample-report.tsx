import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Download,
  ExternalLink,
  Eye,
  FileCheck2,
  FileText,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";

const SAMPLE_PDF_URL = "/InspectPeak-Sample-Home-Inspection-Report.pdf";
const SAMPLE_PDF_FILENAME = "InspectPeak-Sample-Home-Inspection-Report.pdf";

export const Route = createFileRoute("/sample-report")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      {
        title: "Sample Inspection Report | What You Receive — INSPECTPEAK",
      },
      {
        name: "description",
        content:
          "View and download INSPECTPEAK's 10-page sample home inspection report PDF: executive summary, P1–P4 defect priority ratings, photographic defect register, corrective actions, verification checklist and sign-off.",
      },
      {
        property: "og:title",
        content: "Sample Inspection Report — INSPECTPEAK",
      },
      {
        property: "og:description",
        content:
          "Preview and download our complete 10-page sample home inspection report PDF before you book.",
      },
      { property: "og:url", content: "/sample-report" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sample-report" }],
  }),
  component: SampleReportPage,
});

const summaryCounts = [
  {
    label: "Total Defects",
    count: 10,
    badgeClass: "bg-navy text-white",
  },
  {
    label: "P1 · Critical",
    count: 3,
    badgeClass: "bg-destructive/15 text-destructive",
  },
  {
    label: "P2 · Major",
    count: 2,
    badgeClass: "bg-orange-100 text-orange-800",
  },
  {
    label: "P3 · Moderate",
    count: 3,
    badgeClass: "bg-amber-soft text-foreground",
  },
  {
    label: "P4 · Minor",
    count: 2,
    badgeClass: "bg-emerald-100 text-emerald-800",
  },
  {
    label: "Physical Test Needed",
    count: 7,
    badgeClass: "bg-navy-soft text-primary",
  },
] as const;

const sampleFindings = [
  {
    id: "D-01",
    priority: "P1 · Critical",
    priorityClass: "bg-destructive text-white",
    title: "Active Wall Dampness & Suspected Seepage Band",
    location: "Master Bedroom — North Exterior Wall (below window sill)",
    basis: "Visual + Physical Verification",
    requiresPhysical: true,
    action:
      "Trace moisture entry path, perform moisture-meter mapping & window water test, dry wall fully before plastering and repainting.",
  },
  {
    id: "D-02",
    priority: "P1 · Critical",
    priorityClass: "bg-destructive text-white",
    title: "Ceiling Seepage Stains & Flaking Paint Below Wet Area",
    location: "Ground Floor Passage Ceiling (below First Floor Bathroom)",
    basis: "Visual + Physical Verification",
    requiresPhysical: true,
    action:
      "24-hour bathroom ponding test & concealed plumbing pressure test; repair sunken slab waterproofing at source before ceiling restoration.",
  },
  {
    id: "D-04",
    priority: "P2 · Major",
    priorityClass: "bg-orange-700 text-white",
    title: "Diagonal Surface Crack on Balcony Column",
    location: "First Floor Front Balcony — Structural Corner Column",
    basis: "Visual + Physical Verification",
    requiresPhysical: true,
    action:
      "Expose localized plaster strip to verify whether crack is limited to plaster or penetrates RCC; engage structural engineer if concrete is cracked.",
  },
  {
    id: "D-05",
    priority: "P2 · Major",
    priorityClass: "bg-orange-700 text-white",
    title: "Bathroom Plumbing Fixture Seepage & Floor Drain Seal Gap",
    location: "Master Bathroom — Shower Valve Wall & Floor Drain",
    basis: "Visual + Physical Verification",
    requiresPhysical: true,
    action:
      "Pressure-test concealed shower elbow joint, seal flange & WC base with neutral silicone, and reset floor drain frame with epoxy grout.",
  },
  {
    id: "D-06",
    priority: "P3 · Moderate",
    priorityClass: "bg-amber-700 text-white",
    title: "Uneven Floor Tile Levelling, Lippage & Hollow Spots",
    location: "Living Room Passage & Kitchen Entry (4 marked tiles)",
    basis: "Visual & Acoustic Tapping",
    requiresPhysical: false,
    action:
      "Lift and re-lay hollow/uneven tiles on full-bed polymer adhesive flush within ≤1.5 mm tolerance and re-grout in matching shade.",
  },
  {
    id: "D-08",
    priority: "P3 · Moderate",
    priorityClass: "bg-amber-700 text-white",
    title: "Electrical Switchboard Finishing Gaps & Unverified Earthing",
    location: "Kitchen Counter Backsplash & Bedroom 2 Wall",
    basis: "Visual + Physical Verification",
    requiresPhysical: true,
    action:
      "Align concealed back-boxes plumb, secure loose 16A socket, and complete licensed polarity, earthing continuity & RCCB trip tests.",
  },
] as const;

const pdfSections = [
  {
    page: "Page 1",
    title: "Cover Page & Property Information",
    detail:
      "INSPECTPEAK branding, reference ID, fictional sample villa metadata and scope summary.",
  },
  {
    page: "Page 2",
    title: "Executive Summary & P1–P4 Classification",
    detail:
      "Defect distribution metrics, priority matrix, key categories of concern and action plan.",
  },
  {
    page: "Pages 3–7",
    title: "Photo-Based Defect Register (D-01 to D-10)",
    detail:
      "10 detailed findings with photographs, locations, corrective actions and verification flags.",
  },
  {
    page: "Page 8",
    title: "Consolidated Defect Summary Table",
    detail: "At-a-glance builder coordination register summarizing all 10 observed defects.",
  },
  {
    page: "Page 9",
    title: "Physical Verification & Rectification Checklist",
    detail:
      "Clear separation of visual checks vs. physical site tests (moisture, pressure, earthing).",
  },
  {
    page: "Page 10",
    title: "Final Inspection Closure & Sign-Off",
    detail:
      "Defect-by-defect closure register and formal client, builder & engineer sign-off blocks.",
  },
] as const;

const reportIncludes = [
  {
    Icon: Camera,
    title: "Photographic evidence",
    text: "Every observation is photographed on site with clear captions, so nothing depends on memory or verbal notes.",
  },
  {
    Icon: MapPin,
    title: "Exact room & element location",
    text: "Each defect ID is mapped to the exact room, wall, ceiling or fixture — ready to share with your builder or contractor.",
  },
  {
    Icon: AlertTriangle,
    title: "P1–P4 priority ratings",
    text: "P1 Critical, P2 Major, P3 Moderate and P4 Minor — so you know what needs urgent source repair and what is cosmetic.",
  },
  {
    Icon: FileCheck2,
    title: "Corrective action & sign-off",
    text: "Practical repair steps, physical testing checklist and formal closure register to track every defect to completion.",
  },
] as const;

function SampleReportPage() {
  const [showInlinePdf, setShowInlinePdf] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="blueprint-grid bg-navy px-4 pb-16 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-amber">
              Sample Inspection Report · 10-Page A4 PDF
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              Know Exactly What Your Report Will Look Like
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              Every INSPECTPEAK inspection ends with an engineering-grade written report — executive
              defect counts, P1–P4 priority ratings, photographic evidence, corrective actions and a
              final rectification sign-off checklist.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button variant="accent" size="lg" asChild>
                <a href={SAMPLE_PDF_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  View Sample Report
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/25 bg-white/10 text-white hover:bg-white hover:text-navy"
                asChild
              >
                <a href={SAMPLE_PDF_URL} download={SAMPLE_PDF_FILENAME}>
                  <Download className="h-4 w-4" />
                  Download Sample Report
                </a>
              </Button>
            </div>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
              Ref. IP-HIR-2026-014-SAMPLE · Illustrative Sample Property · Free PDF Download
            </p>
          </Reveal>
        </div>
      </section>

      {/* Interactive Report Preview & PDF Actions */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal className="overflow-hidden rounded-2xl border bg-card shadow-[0_24px_60px_-24px_oklch(0.24_0.014_250/0.35)]">
            {/* Report preview header */}
            <div className="card-top-rule flex flex-col justify-between gap-4 bg-navy px-6 py-5 sm:flex-row sm:items-center">
              <div>
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-amber">
                  INSPECTPEAK · Sample Home Inspection Report · 10 Pages
                </p>
                <h2 className="mt-1 text-lg font-bold text-white sm:text-xl">
                  Sample Villa 14 — Maple Greens Layout, Sector 12, Indore (3 BHK · 2,150 sq. ft.)
                </h2>
                <p className="mt-1 text-xs text-white/65">
                  Pre-Handover Visual Inspection · Ref. IP-HIR-2026-014-SAMPLE
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2.5">
                <ShieldCheck className="hidden h-8 w-8 text-amber sm:block" />
              </div>
            </div>

            {/* Executive summary defect counts */}
            <div className="border-b bg-muted/40 px-6 py-5">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Executive Summary · Defect Breakdown
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {summaryCounts.map((item) => (
                  <span
                    key={item.label}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider ${item.badgeClass}`}
                  >
                    <span className="text-xs font-extrabold">{item.count}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlighted findings from the sample PDF */}
            <div className="px-6 py-6">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <h3 className="text-base font-bold text-foreground">
                  Selected Illustrative Findings from the Report
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Showing 6 of 10 documented defects
                </span>
              </div>

              <div className="mt-4 grid gap-3.5 md:grid-cols-2">
                {sampleFindings.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between rounded-xl border bg-background p-4 transition-colors hover:border-primary/30"
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-xs font-bold text-primary">
                          DEFECT {item.id}
                        </span>
                        <span
                          className={`rounded px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${item.priorityClass}`}
                        >
                          {item.priority}
                        </span>
                      </div>
                      <h4 className="mt-2 text-sm font-bold leading-snug text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-1 flex items-start gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber" />
                        <span>{item.location}</span>
                      </p>
                      <p className="mt-2.5 text-xs leading-relaxed text-foreground/80">
                        <span className="font-semibold text-foreground">Action: </span>
                        {item.action}
                      </p>
                    </div>
                    <div className="mt-3 border-t pt-2.5">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 font-mono text-[10px] font-semibold ${
                          item.requiresPhysical
                            ? "bg-destructive/10 text-destructive"
                            : "bg-emerald-50 text-emerald-800"
                        }`}
                      >
                        {item.requiresPhysical ? (
                          <Wrench className="h-3 w-3" />
                        ) : (
                          <Eye className="h-3 w-3" />
                        )}
                        {item.basis}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Complete 10-page structure outline */}
              <div className="mt-7 rounded-xl border bg-muted/35 p-5">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-amber" />
                  <h3 className="text-sm font-bold text-foreground">
                    Inside the Complete 10-Page PDF Report
                  </h3>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {pdfSections.map((sec) => (
                    <div key={sec.page} className="rounded-lg border bg-card p-3.5">
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-amber">
                        {sec.page}
                      </p>
                      <p className="mt-1 text-xs font-bold text-foreground">{sec.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {sec.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action bar + optional inline PDF preview */}
              <div className="mt-6 flex flex-col items-stretch justify-between gap-3 rounded-xl border bg-navy-soft/40 p-4 sm:flex-row sm:items-center">
                <div className="flex items-start gap-2.5">
                  <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber" />
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      InspectPeak-Sample-Home-Inspection-Report.pdf
                    </p>
                    <p className="text-xs text-muted-foreground">
                      10-Page A4 PDF · Photo-Based Defect Register · Verification &amp; Sign-Off
                      Included
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setShowInlinePdf((prev) => !prev)}
                  >
                    <Eye className="h-4 w-4" />
                    {showInlinePdf ? "Hide Inline Preview" : "Inline PDF Preview"}
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <a href={SAMPLE_PDF_URL} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      View Sample Report
                    </a>
                  </Button>
                  <Button variant="accent" size="sm" asChild>
                    <a href={SAMPLE_PDF_URL} download={SAMPLE_PDF_FILENAME}>
                      <Download className="h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </div>

              {showInlinePdf && (
                <div className="mt-5 overflow-hidden rounded-xl border bg-muted">
                  <iframe
                    src={`${SAMPLE_PDF_URL}#view=FitH`}
                    title="INSPECTPEAK Sample Home Inspection Report PDF Preview"
                    className="h-[680px] w-full bg-white"
                  />
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t bg-card px-4 py-2.5 text-xs text-muted-foreground">
                    <span>Having trouble viewing the embedded PDF on mobile?</span>
                    <a
                      href={SAMPLE_PDF_URL}
                      download={SAMPLE_PDF_FILENAME}
                      className="font-semibold text-primary underline hover:text-amber"
                    >
                      Download the PDF directly
                    </a>
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Illustrative sample prepared by INSPECTPEAK — fictional property &amp; client details
            only
          </p>
        </div>
      </section>

      {/* What the report includes */}
      <section className="bg-muted/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Inside the Report"
            title="Every Finding, Fully Documented"
            description="Four engineering standards you can rely on in every INSPECTPEAK report — no vague notes, no undocumented opinions."
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
                <h3 className="mt-3 text-sm font-bold leading-snug text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-3xl rounded-xl border-l-4 border-amber bg-amber-soft/50 p-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber" />
              <p className="text-sm leading-relaxed text-foreground/85">
                Reports are delivered for properties inspected across {siteConfig.serviceArea}.
                Visual observations are clearly distinguished from findings requiring physical
                testing (such as moisture-meter mapping, plumbing pressure tests, ponding tests or
                structural verification) so you know the exact next step before handover.
              </p>
            </div>
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
