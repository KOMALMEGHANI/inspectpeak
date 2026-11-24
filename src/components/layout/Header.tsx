import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, ChevronRight, ClipboardCheck, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Projects", to: "/projects" },
  { label: "Contact Us", to: "/contact" },
  { label: "Feedback", to: "/feedback" },
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

  const isTabActive = (to: string) => {
    if (to === "/") {
      return location.pathname === "/";
    }
    return location.pathname === to || location.pathname.startsWith(to + "/");
  };

  const isServicesActive =
    services.some((s) => location.pathname === s.slug) || location.pathname === "/sample-report";

  const getTabClass = (isActive: boolean) =>
    cn(
      "group relative inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 xl:px-4 xl:py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ease-out transform select-none cursor-pointer",
      isActive
        ? "bg-navy text-white shadow-md shadow-navy/20 scale-105 border border-navy/20"
        : "text-foreground/75 hover:text-navy hover:bg-white hover:shadow-xs hover:scale-105 active:scale-95",
    );

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md transition-shadow",
          scrolled && "shadow-[0_2px_16px_-6px_oklch(0.25_0.055_265/0.18)]",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop Navigation — button tabs in a sleek segmented pill bar matching Orbit Engineering and InspectPeak branding */}
          <nav
            className="hidden items-center bg-muted/70 backdrop-blur-sm rounded-full p-1 border border-border/60 shadow-xs lg:flex"
            aria-label="Main"
          >
            <Link to="/" className={getTabClass(isTabActive("/"))}>
              {isTabActive("/") && (
                <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 animate-pulse" />
              )}
              <span>Home</span>
            </Link>

            <Link to="/about" className={getTabClass(isTabActive("/about"))}>
              {isTabActive("/about") && (
                <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 animate-pulse" />
              )}
              <span>About Us</span>
            </Link>

            {/* Services dropdown button tab */}
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
                className={getTabClass(isServicesActive)}
              >
                {isServicesActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 animate-pulse" />
                )}
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    servicesOpen && "rotate-180",
                    isServicesActive ? "text-amber" : "text-muted-foreground group-hover:text-navy",
                  )}
                />
              </button>
              <div
                className={cn(
                  "absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 transition-all duration-200",
                  servicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0 pointer-events-none",
                )}
              >
                <div className="card-top-rule overflow-hidden rounded-xl border bg-popover/95 p-1.5 shadow-xl backdrop-blur-md">
                  {services.map((s) => {
                    const isCurrent = location.pathname === s.slug;
                    return (
                      <Link
                        key={s.slug}
                        to={s.slug}
                        className={cn(
                          "flex items-center justify-between rounded-lg px-3.5 py-2.5 text-xs xl:text-sm font-medium transition-all duration-150 active:scale-98",
                          isCurrent
                            ? "bg-navy text-white font-semibold shadow-xs"
                            : "text-foreground/85 hover:bg-muted hover:text-navy",
                        )}
                      >
                        <span className="flex items-center gap-2">
                          <ChevronRight
                            className={cn(
                              "h-3.5 w-3.5",
                              isCurrent ? "text-amber" : "text-amber/70",
                            )}
                          />
                          {s.name}
                        </span>
                        {isCurrent && (
                          <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0" />
                        )}
                      </Link>
                    );
                  })}
                  <div className="my-1 border-t border-border/60" />
                  <Link
                    to="/sample-report"
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3.5 py-2.5 text-xs xl:text-sm font-medium transition-all duration-150 active:scale-98",
                      location.pathname === "/sample-report"
                        ? "bg-navy text-white font-semibold shadow-xs"
                        : "text-foreground/85 hover:bg-muted hover:text-navy",
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <ChevronRight
                        className={cn(
                          "h-3.5 w-3.5",
                          location.pathname === "/sample-report" ? "text-amber" : "text-amber/70",
                        )}
                      />
                      Sample Report
                    </span>
                    {location.pathname === "/sample-report" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0" />
                    )}
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/pricing" className={getTabClass(isTabActive("/pricing"))}>
              {isTabActive("/pricing") && (
                <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 animate-pulse" />
              )}
              <span>Pricing</span>
            </Link>

            <Link to="/projects" className={getTabClass(isTabActive("/projects"))}>
              {isTabActive("/projects") && (
                <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 animate-pulse" />
              )}
              <span>Projects</span>
            </Link>

            <Link to="/contact" className={getTabClass(isTabActive("/contact"))}>
              {isTabActive("/contact") && (
                <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 animate-pulse" />
              )}
              <span>Contact Us</span>
            </Link>

            <Link to="/feedback" className={getTabClass(isTabActive("/feedback"))}>
              {isTabActive("/feedback") && (
                <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 animate-pulse" />
              )}
              <span>Feedback</span>
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Button variant="accent" className="rounded-full shadow-sm" asChild>
              <Link to="/contact">
                <ClipboardCheck className="h-4 w-4" />
                Book Inspection
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted active:scale-95 transition-all lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu — a sibling of <header>: the header's backdrop-filter makes
          it a containing block, which would collapse a fixed child to 1px. */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t bg-background/95 backdrop-blur-lg transition-all duration-300 lg:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1.5 px-4 py-5" aria-label="Mobile">
          {navLinks.slice(0, 2).map((l) => {
            const active = isTabActive(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200 active:scale-98",
                  active
                    ? "bg-navy text-white shadow-sm ring-1 ring-white/10"
                    : "text-foreground/85 hover:bg-muted active:bg-muted/80",
                )}
              >
                <span>{l.label}</span>
                {active ? (
                  <span className="h-2 w-2 rounded-full bg-amber" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground/40" />
                )}
              </Link>
            );
          })}

          <div className="my-2 border-t border-border/60 pt-2">
            <p className="px-4 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              Services & Reports
            </p>
            <div className="mt-2 flex flex-col gap-1">
              {services.map((s) => {
                const active = location.pathname === s.slug;
                return (
                  <Link
                    key={s.slug}
                    to={s.slug}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 active:scale-98",
                      active
                        ? "bg-navy text-white font-semibold shadow-sm"
                        : "text-foreground/85 hover:bg-muted active:bg-muted/80",
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <ChevronRight className="h-3.5 w-3.5 text-amber" />
                      {s.name}
                    </span>
                    {active && <span className="h-2 w-2 rounded-full bg-amber" />}
                  </Link>
                );
              })}
              <Link
                to="/sample-report"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 active:scale-98",
                  location.pathname === "/sample-report"
                    ? "bg-navy text-white font-semibold shadow-sm"
                    : "text-foreground/85 hover:bg-muted active:bg-muted/80",
                )}
              >
                <span className="flex items-center gap-2">
                  <ChevronRight className="h-3.5 w-3.5 text-amber" />
                  Sample Report
                </span>
                {location.pathname === "/sample-report" && (
                  <span className="h-2 w-2 rounded-full bg-amber" />
                )}
              </Link>
            </div>
          </div>

          <div className="my-1 border-t border-border/60 pt-1 flex flex-col gap-1.5">
            {navLinks.slice(2).map((l) => {
              const active = isTabActive(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200 active:scale-98",
                    active
                      ? "bg-navy text-white shadow-sm ring-1 ring-white/10"
                      : "text-foreground/85 hover:bg-muted active:bg-muted/80",
                  )}
                >
                  <span>{l.label}</span>
                  {active ? (
                    <span className="h-2 w-2 rounded-full bg-amber" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground/40" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 px-1 pb-6">
            <Button variant="accent" className="w-full h-11 text-base shadow-md rounded-xl" asChild>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <ClipboardCheck className="h-4 w-4 mr-1.5" />
                Book Inspection
              </Link>
            </Button>
            <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
