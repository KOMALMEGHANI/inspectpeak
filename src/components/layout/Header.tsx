import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  Menu,
  X,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkClass = (to: string) =>
    cn(
      "text-sm font-medium transition-colors hover:text-primary",
      location.pathname === to ? "text-primary" : "text-foreground/80",
    );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md transition-shadow",
        scrolled && "shadow-[0_2px_16px_-6px_oklch(0.25_0.055_265/0.18)]",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About Us
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                services.some((s) => s.slug === location.pathname)
                  ? "text-primary"
                  : "text-foreground/80",
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform",
                  servicesOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 transition-all",
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0",
              )}
            >
              <div className="card-top-rule overflow-hidden rounded-lg border bg-popover py-2 shadow-lg">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={s.slug}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-muted hover:text-primary"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-amber" />
                    {s.name}
                  </Link>
                ))}
                <div className="my-1.5 border-t" />
                <Link
                  to="/sample-report"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-muted hover:text-primary"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-amber" />
                  Sample Report
                </Link>
              </div>
            </div>
          </div>

          <Link to="/projects" className={linkClass("/projects")}>
            Projects
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact Us
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button variant="accent" asChild>
            <Link to="/contact">
              <ClipboardCheck className="h-4 w-4" />
              Book Inspection
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t bg-background transition-all lg:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {navLinks.slice(0, 2).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
            >
              {l.label}
            </Link>
          ))}
          <p className="mt-2 px-3 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Services
          </p>
          {services.map((s) => (
            <Link
              key={s.slug}
              to={s.slug}
              className="rounded-md px-3 py-3 text-base text-foreground/85 transition-colors hover:bg-muted"
            >
              {s.name}
            </Link>
          ))}
          <Link
            to="/sample-report"
            className="rounded-md px-3 py-3 text-base text-foreground/85 transition-colors hover:bg-muted"
          >
            Sample Report
          </Link>
          {navLinks.slice(2).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4 px-3 pb-6">
            <Button variant="accent" className="w-full" asChild>
              <Link to="/contact">Book Inspection</Link>
            </Button>
            <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
