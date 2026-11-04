import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Logo } from "@/components/Logo";
import { services } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Sample Report", to: "/sample-report" },
  { label: "Contact Us", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy-policy" },
] as const;

const socials = [
  { key: "linkedin", label: "LinkedIn", href: siteConfig.social.linkedin, Icon: Linkedin },
  { key: "instagram", label: "Instagram", href: siteConfig.social.instagram, Icon: Instagram },
  { key: "facebook", label: "Facebook", href: siteConfig.social.facebook, Icon: Facebook },
  { key: "youtube", label: "YouTube", href: siteConfig.social.youtube, Icon: Youtube },
] as const;

export function Footer() {
  return (
    <footer className="blueprint-grid bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              Professional property inspection and building assessment services
              across India — helping homebuyers, homeowners and investors make
              informed decisions.
            </p>
            <div className="mt-5 flex gap-3">
              {socials
                .filter((s) => s.href)
                .map(({ key, label, href, Icon }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white/80 transition-colors hover:bg-amber hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
            </div>
          </div>

          <nav aria-label="Services">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-amber">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={s.slug}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Quick links">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-amber">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-amber">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                <a
                  href={siteConfig.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                <a
                  href={siteConfig.emailHref}
                  className="break-all transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                <a
                  href={siteConfig.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.2em]">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
