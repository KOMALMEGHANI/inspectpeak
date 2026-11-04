import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      {
        title: "Privacy Policy | INSPECTPEAK",
      },
      {
        name: "description",
        content:
          "How INSPECTPEAK collects, uses and protects the information you share through our website and enquiry forms.",
      },
      { property: "og:title", content: "Privacy Policy — INSPECTPEAK" },
      {
        property: "og:description",
        content: "How we handle the information you share with us.",
      },
      { property: "og:url", content: "/privacy-policy" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

const sections = [
  {
    title: "Information we collect",
    body: "When you submit an enquiry we collect the details you provide: your name, phone number, email address, property location and the property details you choose to share. We collect nothing else about you unless you give it to us directly.",
  },
  {
    title: "How we use your information",
    body: "Your details are used only to respond to your enquiry — confirming inspection slots, preparing scopes and sending your inspection report. We do not sell, rent or share your information with advertisers or data brokers.",
  },
  {
    title: "Storage and security",
    body: "Enquiries submitted through this website are transmitted securely and stored in a protected database with access limited to the INSPECTPEAK inspection team.",
  },
  {
    title: "Third parties",
    body: "We share your property details with our inspection engineers and, where you have asked us to, with the developer or seller's representative coordinating site access — only to the extent needed to carry out the inspection you booked.",
  },
  {
    title: "Your choices",
    body: "You can ask us at any time to update or delete the information you have shared with us, or to stop contacting you. Email us and we will act on your request.",
  },
] as const;

function PrivacyPolicyPage() {
  return (
    <>
      <section className="blueprint-grid bg-navy px-4 pb-14 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-amber">
              Legal
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/70">
              How INSPECTPEAK handles the information you share with us.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map((s) => (
            <Reveal key={s.title}>
              <h2 className="text-xl font-bold text-foreground">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </Reveal>
          ))}
          <Reveal>
            <h2 className="text-xl font-bold text-foreground">Contact</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Questions about this policy or your data? Email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-primary underline underline-offset-2 hover:text-amber"
              >
                {siteConfig.email}
              </a>{" "}
                or call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="text-primary underline"
                >
                  {siteConfig.phone}
                </a>
                . You can also use our{" "}
              <Link
                to="/contact"
                className="font-semibold text-primary underline underline-offset-2 hover:text-amber"
              >
                contact page
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
