import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Gallery } from "@/components/Gallery";
import { galleryItems } from "@/lib/gallery-data";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/projects")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      {
        title: "Projects | Inspection Work & Site Documentation — INSPECTPEAK",
      },
      {
        name: "description",
        content:
          "A look at INSPECTPEAK's documented inspection work — crack assessments, moisture detection, snagging checks, drawings review and on-site visits.",
      },
      {
        property: "og:title",
        content: "Projects — INSPECTPEAK Inspection Work",
      },
      {
        property: "og:description",
        content:
          "Documented inspection work — cracks, moisture, finishing quality and on-site assessments.",
      },
      { property: "og:url", content: "/projects" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const workAreas = [
  {
    title: "Crack & structural checks",
    text: "Crack measurement and visual structural assessment recorded with scales and photographs.",
  },
  {
    title: "Moisture & seepage",
    text: "Dampness, seepage and leakage tracing across walls, ceilings and terraces.",
  },
  {
    title: "Finishing & snagging",
    text: "Tile levelling, joint quality and workmanship checks before handover.",
  },
  {
    title: "Drawings & documentation",
    text: "Structural drawings review and design documentation for residential projects.",
  },
] as const;

function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="blueprint-grid bg-navy px-4 pb-16 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-amber">
              Projects
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              Our Work, Documented
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              Inspection contexts from our site visits across{" "}
              {siteConfig.serviceArea} — cracks, moisture, finishing quality,
              drawings and buildings in progress.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What we document */}
      <section className="px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workAreas.map(({ title, text }) => (
              <div
                key={title}
                className="card-top-rule rounded-xl border bg-card p-6 shadow-sm"
              >
                <h3 className="text-sm font-bold leading-snug text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Site Documentation"
            title="From Our Site Visits"
            description="Photographs from real inspection contexts — the same evidence style that goes into every report."
          />
          <div className="mt-10">
            <Gallery items={galleryItems} />
          </div>
          <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Inspection contexts — individual client reports stay confidential
          </p>
        </div>
      </section>

      <div className="pb-16">
        <CTASection
          title="Add Your Property to Our Inspection List"
          description="Book an inspection and we'll document every detail before you commit."
          secondaryLabel="Contact Us"
          secondaryTo="/contact"
        />
      </div>
    </>
  );
}
