import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { pricingPlans } from "@/lib/pricing-data";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type PricingSectionProps = {
  className?: string;
  showHeading?: boolean;
};

export function PricingSection({ className, showHeading = true }: PricingSectionProps) {
  return (
    <section className={cn("px-4 py-20 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-7xl">
        {showHeading && (
          <SectionHeading
            kicker="Transparent Packages"
            title="Inspection Plans & Pricing"
            description="Clear, upfront pricing with no hidden costs across Bhopal & Indore. Pick the inspection plan that suits your property stage."
          />
        )}

        <Reveal className="reveal-stagger mt-12 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan) => {
            const isAdvance = plan.isPopular;
            const whatsappText = `Hello INSPECTPEAK, I would like to book the ${plan.name} (${plan.discountedPrice} ${plan.unit}) for my property.`;

            return (
              <div
                key={plan.id}
                className={cn(
                  "relative flex flex-col rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl sm:p-8",
                  isAdvance
                    ? "border-2 border-emerald-500 bg-gradient-to-b from-emerald-500/[0.04] via-card to-card ring-4 ring-emerald-500/10 lg:-translate-y-2 lg:shadow-xl"
                    : "border-border hover:-translate-y-1",
                )}
              >
                {/* Popular / Recommended Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full px-4 py-1 font-mono text-[11px] font-bold uppercase tracking-wider shadow-sm",
                        isAdvance
                          ? "bg-emerald-600 text-white"
                          : "bg-navy-soft text-primary border border-primary/20",
                      )}
                    >
                      {isAdvance && <Sparkles className="h-3 w-3" />}
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Title & Subtitle */}
                <div className="text-center pt-2">
                  <h3 className="font-mono text-xl font-extrabold uppercase tracking-wider text-foreground sm:text-2xl">
                    {plan.name}
                  </h3>

                  {/* Strikethrough original price */}
                  <div className="mt-3 flex items-center justify-center gap-1 text-sm font-semibold text-muted-foreground">
                    <span className="relative">
                      <span className="text-muted-foreground/80 line-through decoration-destructive decoration-2">
                        {plan.originalPrice}
                      </span>
                    </span>
                    <span>{plan.unit}</span>
                  </div>

                  {/* Tagline / Subtitle */}
                  <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                    {plan.tagline}
                  </p>

                  {/* Big Discounted Price */}
                  <div className="mt-4 flex items-baseline justify-center gap-1.5 border-b border-border/60 pb-6">
                    <span className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                      {plan.discountedPrice}
                    </span>
                    <span className="font-mono text-xs font-semibold text-muted-foreground sm:text-sm">
                      {plan.unit}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="mt-6 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-600" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Call to action button */}
                <div className="mt-8 space-y-2.5 pt-4">
                  <Button
                    variant={isAdvance ? "accent" : "default"}
                    size="lg"
                    asChild
                    className={cn(
                      "w-full rounded-xl py-6 text-sm font-bold uppercase tracking-wider shadow-sm transition-all sm:text-base",
                      isAdvance && "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-md",
                    )}
                  >
                    <Link to="/contact">
                      {plan.ctaLabel}
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>

                  <a
                    href={whatsappLink(whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg py-2 font-mono text-xs font-semibold text-muted-foreground transition-colors hover:text-emerald-600"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                    Instant WhatsApp Enquiry
                  </a>
                </div>
              </div>
            );
          })}
        </Reveal>

        {/* Footnote on city availability */}
        <div className="mt-12 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            All plans include site inspection by qualified civil engineers · Serving{" "}
            <span className="font-semibold text-foreground">Bhopal &amp; Indore</span> · Report
            delivered within 24–48 hours
          </p>
        </div>
      </div>
    </section>
  );
}
