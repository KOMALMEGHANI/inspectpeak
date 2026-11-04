import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ProcessSteps } from "@/components/ProcessSteps";
import type { InspectionService } from "@/lib/services-data";
import { cn } from "@/lib/utils";

type ServiceDetailProps = {
  service: InspectionService;
  /** Short "at a glance" points shown next to the hero. */
  highlights: string[];
  /** Optional page-specific FAQ subset. */
  faqs?: { q: string; a: string }[];
  /** Optional extra copy block, e.g. boundaries ("what we do not do"). */
  note?: string;
};

/** Shared layout for the five service detail pages. */
export function ServiceDetail({
  service,
  highlights,
  faqs,
  note,
}: ServiceDetailProps) {
  return (
    <>
      {/* Hero */}
      <section className="blueprint-grid bg-navy px-4 pb-16 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-amber">
              {service.category === "design" ? "Design Service" : "Inspection Service"}
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              {service.intro}
            </p>
            <ul className="mt-7 space-y-2.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-white/85">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-amber" />
                  <span className="text-sm sm:text-base">{h}</span>
                </li>
              ))}
            </ul>
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
          <Reveal className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img
              src={service.image}
              alt={service.imageAlt}
              width={1200}
              height={800}
              loading="eager"
              decoding="async"
              className="img-reveal aspect-[3/2] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Scope */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="What We Cover"
            title={`Scope of the ${service.shortName}`}
            align="left"
            className="max-w-3xl"
          />
          <Reveal className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.scope.map((item, i) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-navy-soft font-mono text-xs font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground sm:text-base">
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-8 rounded-xl border border-amber/40 bg-amber-soft p-6">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="text-sm font-bold text-foreground">
                  What you receive
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                  {service.outcome}
                </p>
              </div>
            </div>
          </Reveal>

          {note && (
            <Reveal className="mt-6 rounded-xl border bg-muted p-6">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {note}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Process */}
      <section
        className={cn(
          "px-4 py-20 sm:px-6 lg:px-8",
          service.category === "design"
            ? "bg-background"
            : "blueprint-grid bg-navy-deep",
        )}
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Our Process"
            title="Four Steps, One Clear Outcome"
            dark={service.category !== "design"}
            description="A consistent, documented process from your first enquiry to the final report."
          />
          <div className="mt-12">
            <ProcessSteps dark={service.category !== "design"} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              kicker="Common Questions"
              title="Frequently Asked Questions"
            />
            <div className="mt-10">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={
          service.category === "design"
            ? "Need Drawings or a Plan?"
            : "Ready to Book Your Inspection?"
        }
        description={
          service.category === "design"
            ? "Share your plot, requirement and stage — we'll get back with the right design approach and documentation."
            : "Tell us about your property and preferred date. Our team confirms the slot and scope before the visit."
        }
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  );
}
