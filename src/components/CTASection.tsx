import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  className?: string;
};

/** Navy conversion band reused across pages. */
export function CTASection({
  title,
  description,
  primaryLabel = "Book a Home Inspection",
  primaryTo = "/contact",
  secondaryLabel = "Explore Our Services",
  secondaryTo = "/about",
  className,
}: CTASectionProps) {
  return (
    <section className={cn("px-4 sm:px-6 lg:px-8", className)}>
      <Reveal className="blueprint-grid mx-auto max-w-7xl rounded-2xl bg-navy px-6 py-14 text-center sm:px-12">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="accent" size="lg" asChild>
            <Link to={primaryTo}>
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          {secondaryLabel && (
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link to={secondaryTo}>{secondaryLabel}</Link>
            </Button>
          )}
        </div>
      </Reveal>
    </section>
  );
}
