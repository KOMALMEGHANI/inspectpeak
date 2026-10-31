import { ClipboardList, FileText, Search, CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    Icon: CalendarCheck,
    title: "Book Your Inspection",
    description:
      "Share your property details, location and preferred date through the enquiry form or WhatsApp. We confirm the slot and scope.",
  },
  {
    number: "02",
    Icon: Search,
    title: "Site Visit & Detailed Assessment",
    description:
      "A systematic walk-through of the property — walls, structure, plumbing, electrical points, finishes and waterproofing — with every check performed on site.",
  },
  {
    number: "03",
    Icon: ClipboardList,
    title: "Findings Documentation",
    description:
      "Each observation is photographed, located and graded by severity so nothing important is lost in generalities.",
  },
  {
    number: "04",
    Icon: FileText,
    title: "Inspection Report & Recommendations",
    description:
      "You receive a written report with photographic evidence, severity levels and practical next steps you can act on.",
  },
] as const;

export function ProcessSteps({ dark = false }: { dark?: boolean }) {
  return (
    <Reveal className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map(({ number, Icon, title, description }) => (
        <div
          key={number}
          className={cn(
            "relative flex h-full flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1",
            dark
              ? "border-white/10 bg-white/5 hover:bg-white/10"
              : "bg-card shadow-sm hover:shadow-[0_16px_40px_-16px_oklch(0.25_0.055_265/0.25)]",
          )}
        >
          <div className="flex items-center justify-between">
            <span
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-lg",
                dark ? "bg-amber text-navy-deep" : "bg-navy-soft text-primary",
              )}
            >
              <Icon className="h-5 w-5" />
            </span>
            <span
              className={cn(
                "font-mono text-3xl font-semibold",
                dark ? "text-white/15" : "text-primary/10",
              )}
            >
              {number}
            </span>
          </div>
          <h3
            className={cn(
              "mt-4 text-base font-bold leading-snug",
              dark ? "text-white" : "text-foreground",
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "mt-2 text-sm leading-relaxed",
              dark ? "text-white/65" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        </div>
      ))}
    </Reveal>
  );
}
