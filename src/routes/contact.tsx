import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Us | Book a Home Inspection in Bhopal — INSPECTPEAK",
      },
      {
        name: "description",
        content:
          "Contact INSPECTPEAK to book a home inspection in Bhopal, Madhya Pradesh. Call 0755 4328447 or email info.inspectpeak@gmail.com — enquiry form, response within one working day.",
      },
      {
        property: "og:title",
        content: "Contact INSPECTPEAK — Book a Home Inspection",
      },
      {
        property: "og:description",
        content:
          "Call 0755 4328447, email info.inspectpeak@gmail.com or send an enquiry — Bhopal, Madhya Pradesh.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactItems = [
  {
    Icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    external: false,
  },
  {
    Icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: siteConfig.emailHref,
    external: false,
  },
  {
    Icon: MapPin,
    label: "Location",
    value: siteConfig.address,
    href: siteConfig.mapHref,
    external: true,
  },
] as const;

function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="blueprint-grid bg-navy px-4 pb-16 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-amber">
              Contact Us
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              Book an Inspection or Ask Us Anything
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              Share your property details and preferred date — we confirm the
              slot and scope with you before the visit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <Reveal>
            <h2 className="text-2xl font-bold text-foreground">
              Reach us directly
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Call, email or visit us in {siteConfig.address}. For bookings,
              the enquiry form beside this helps us prepare before we call you
              back.
            </p>
            <ul className="mt-7 space-y-4">
              {contactItems.map(({ Icon, label, value, href, external }) => (
                <li
                  key={label}
                  className="flex items-start gap-3.5 rounded-xl border bg-card p-4 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-soft">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      {label}
                    </span>
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="mt-1 block text-sm font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      {value}
                    </a>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border-l-4 border-amber bg-amber-soft/50 p-5">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-primary/70">
                {siteConfig.tagline}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                Every enquiry is answered by our inspection team — never a call
                centre — so the person confirming your slot understands the
                property.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Before You Enquire"
            title="Quick Answers"
            description="The essentials about booking and reporting — the full FAQ is on the homepage."
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <FaqAccordion items={[faqs[3]!, faqs[6]!]} />
          </div>
        </div>
      </section>

      <div className="py-16">
        <CTASection
          title="Prefer We Call You Back?"
          description="Send the enquiry form with a preferred time and our team will call you."
        />
      </div>
    </>
  );
}
