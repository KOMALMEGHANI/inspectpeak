import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { InspectionService } from "@/lib/services-data";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: InspectionService;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_oklch(0.25_0.055_265/0.25)]",
        className,
      )}
    >
      <Link to={service.slug} className="block overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-primary/60">
          Inspection Service
        </p>
        <h3 className="mt-2 text-xl font-bold text-foreground">
          <Link to={service.slug} className="transition-colors hover:text-primary">
            {service.name}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.intro}</p>
        <ul className="mt-4 space-y-1.5">
          {service.scope.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5 pt-2">
          <Button variant="link" asChild className="h-auto p-0 text-primary">
            <Link to={service.slug}>
              View details
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
