import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PricingSection } from "@/components/PricingSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTASection } from "@/components/CTASection";
import { pricingFaqs } from "@/lib/pricing-data";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/pricing")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      {
        title: "Home Inspection Pricing & Packages | Bhopal & Indore — INSPECTPEAK",
      },
      {
        name: "description",
        content:
          "Transparent home inspection pricing in Bhopal & Indore. Pro Plan from ₹5,999, Advance Plan (Double Visit with Re-Visit) at ₹9,999 + GST. Book your engineering inspection today.",
      },
      {
        property: "og:title",
        content: "Home Inspection Pricing & Packages — INSPECTPEAK",
      },
      {
        property: "og:description",
        content:
          "Clear pricing for pre-purchase, pre-handover and structural inspection packages in Bhopal & Indore.",
      },
      { property: "og:url", content: "/pricing" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Home Inspection Pricing & Packages — INSPECTPEAK",
      },
      {
        name: "twitter:description",
        content:
          "Clear pricing for pre-purchase, pre-handover and structural inspection packages in Bhopal & Indore.",
      },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="blueprint-grid bg-navy px-4 pb-16 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-amber">
              Transparent Pricing · Bhopal &amp; Indore
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Investment in Certainty, Not Surprises
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              A comprehensive inspection costs less than 0.2% of your property value but protects
              you against lakhs of rupees in hidden defects, dampness seepages and structural
              issues.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">
                  Book an Inspection
                  <ArrowRight className="ml-1.5 h-4 w-4" />
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
        </div>
      </section>

      {/* Pricing Cards */}
      <PricingSection showHeading={false} className="py-16 sm:py-20" />

      {/* Why Choose Double Visit Re-inspection Banner */}
      <section className="bg-muted/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border bg-card p-8 shadow-sm sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-xs font-bold text-emerald-600">
                <ShieldCheck className="h-4 w-4" />
                THE ADVANCE ADVANTAGE
              </span>
              <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                Why 80% of Buyers Choose the Advance Plan
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Finding defects is only the first half of the job. Builders often promise to rectify
                snags before possession, but how do you know if the waterproofing was redone
                properly or just painted over?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                With our <strong className="text-foreground">Re-Visit guarantee</strong>, our
                engineers return to the site after the contractor completes repairs to verify
                rectification before you take legal possession or release the final payment.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.03] p-6">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-700">
                What the Re-Visit includes:
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Cross-verification against the initial snag list</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Re-check of leakages, dampness &amp; slopes</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Verification of tile replacements &amp; door alignments</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Final clearance handover sign-off report</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            kicker="Pricing Questions"
            title="Frequently Asked Questions"
            description="Clear answers about our inspection pricing, payment terms and packages."
          />
          <div className="mt-12">
            <FaqAccordion items={pricingFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Secure Your Property?"
        description="Book your preferred inspection plan today. Our team confirms your slot and schedule within one working day."
        secondaryLabel="Explore Sample Report"
        secondaryTo="/sample-report"
      />
    </>
  );
}
