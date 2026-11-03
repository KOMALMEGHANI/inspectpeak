import { createFileRoute } from "@tanstack/react-router";
import { faqs } from "@/lib/faqs";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService } from "@/lib/services-data";

export const Route = createFileRoute("/waterproofing-inspection")({
  head: () => ({
    meta: [
      {
        title:
          "Waterproofing & Leakage Inspection | Dampness & Seepage Check — INSPECTPEAK",
      },
      {
        name: "description",
        content:
          "Waterproofing and leakage inspection for Indian homes: bathroom and kitchen leakage checks, wall dampness detection, terrace and roof waterproofing review, and plumbing leakage assessment.",
      },
      {
        property: "og:title",
        content: "Waterproofing & Leakage Inspection — INSPECTPEAK",
      },
      {
        property: "og:description",
        content:
          "Trace bathroom, kitchen, terrace and plumbing leakage before it becomes an expensive repair.",
      },
      { property: "og:url", content: "/waterproofing-inspection" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/waterproofing-inspection" }],
  }),
  component: WaterproofingInspectionPage,
});

const service = getService("/waterproofing-inspection")!;

function WaterproofingInspectionPage() {
  return (
    <ServiceDetail
      service={service}
      highlights={[
        "Bathroom and kitchen leakage checks around fixtures and drains",
        "Wall dampness detection with photographic documentation",
        "Terrace and roof waterproofing condition review",
        "Plumbing-related visible leakage assessment",
      ]}
      note="We assess visible signs of water ingress — stains, dampness, peeling paint, seepage patterns — and document their extent and likely source patterns. Rectification or re-waterproofing work itself is not part of this inspection."
      faqs={[faqs[0]!, faqs[2]!, faqs[3]!, faqs[6]!]}
    />
  );
}
