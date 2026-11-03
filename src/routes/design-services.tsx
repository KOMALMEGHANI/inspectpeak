import { createFileRoute } from "@tanstack/react-router";
import { faqs } from "@/lib/faqs";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService } from "@/lib/services-data";

export const Route = createFileRoute("/design-services")({
  head: () => ({
    meta: [
      {
        title:
          "Architectural & Structural Design Services | AutoCAD Drafting & Building Plans — INSPECTPEAK",
      },
      {
        name: "description",
        content:
          "Architectural planning, structural design and drawings, AutoCAD drafting, and building plan and quotation support for new builds and renovations.",
      },
      {
        property: "og:title",
        content: "Architectural & Structural Design Services — INSPECTPEAK",
      },
      {
        property: "og:description",
        content:
          "Architectural planning, structural drawings, AutoCAD drafting and building plan support.",
      },
      { property: "og:url", content: "/design-services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/design-services" }],
  }),
  component: DesignServicesPage,
});

const service = getService("/design-services")!;

function DesignServicesPage() {
  return (
    <ServiceDetail
      service={service}
      highlights={[
        "Architectural planning for residential projects and renovations",
        "Structural design and drawings",
        "AutoCAD drafting with clear, buildable documentation",
        "Building plan and quotation support for approvals and contracting",
      ]}
      note="Design services are provided as a separate practice from inspections and are clearly kept apart. We do not claim laboratory testing or specialised structural testing for design work; documentation is prepared for practical construction and submission use."
      faqs={[faqs[5]!, faqs[6]!]}
    />
  );
}
