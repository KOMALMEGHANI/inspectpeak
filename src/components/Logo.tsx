import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

/**
 * Placeholder brand mark — a simple engineering "peak/level" glyph with the
 * INSPECTPEAK wordmark. This is NOT the final logo: it is a temporary,
 * clearly-marked stand-in until the client's existing logo file is added to
 * src/assets/. To use the real logo, replace this component's rendering with
 * an <img> import of the uploaded logo.
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
          "flex h-9 w-9 items-center justify-center rounded-md",
          light ? "bg-amber" : "bg-primary",
        )}
      >
        <svg
          viewBox="0 0 24 24"
          className={cn("h-5 w-5", light ? "text-primary" : "text-primary-foreground")}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* peak + level-line mark */}
          <path d="M3 18 L10 6 L14 12 L17 8 L21 18" />
          <line x1="3" y1="21" x2="21" y2="21" />
        </svg>
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
