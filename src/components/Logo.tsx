import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/inspectpeak-logo.png.asset.json";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

/**
 * INSPECTPEAK brand lockup — the client's uploaded IP-monogram logo next to
 * the wordmark. On dark backgrounds (variant="light") the mark sits on a
 * white chip so the charcoal/red artwork stays fully visible.
 */
export function Logo({ variant = "dark", className }: LogoProps) {
  const light = variant === "light";
  return (
    <Link
      to="/"
      className={cn(
        "group inline-flex items-center gap-2.5",
        className,
      )}
      aria-label="INSPECTPEAK — home"
    >
      <span
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-md p-1 transition-transform duration-300 group-hover:scale-105",
          light && "bg-white shadow-sm",
        )}
      >
        <img
          src={logoAsset.url}
          alt="INSPECTPEAK logo"
          className="h-full w-full object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-extrabold tracking-tight",
            light ? "text-white" : "text-primary",
          )}
        >
          INSPECT<span className="text-amber">PEAK</span>
        </span>
        <span
          className={cn(
            "mt-0.5 font-mono text-[9px] font-medium uppercase tracking-[0.28em]",
            light ? "text-white/60" : "text-muted-foreground",
          )}
        >
          Every Detail. Inspected.
        </span>
      </span>
    </Link>
  );
}
