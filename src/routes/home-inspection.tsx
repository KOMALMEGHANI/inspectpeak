import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService } from "@/lib/services-data";
import { faqs } from "@/lib/faqs";

export const Route = createFileRoute("/home-inspection")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      {
        title:
          "Home Inspection Before Buying | Pre-Purchase Home Inspection Services in India — INSPECTPEAK",
      },
      {
        name: "description",
        content:
          "Pre-purchase, new home, pre-handover, resale and rental property inspections. Identify hidden defects and construction quality issues before you buy — with a clear written report.",
      },
      {
        property: "og:title",
        content: "Home Inspection Before Buying — INSPECTPEAK",
      },
      {
        property: "og:description",
        content:
          "Pre-purchase, new home, pre-handover, resale and rental property inspections with clear written reports.",
      },
      { property: "og:url", content: "/home-inspection" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/home-inspection" }],
  }),
  component: HomeInspectionPage,
});

const service = getService("/home-inspection")!;

function HomeInspectionPage() {
  return (
    <ServiceDetail
      service={service}
      highlights={[
        "Room-by-room assessment of walls, ceilings, floors, doors and windows",
        "Plumbing fixtures, drainage and electrical point checks",
        "Suitable for ready, resale and pre-handover properties",
        "Written report with photographs and severity levels",
      ]}
      note="Our home inspection covers the visible and accessible condition of the property. We do not perform laboratory testing or specialised structural testing; where a finding needs specialist follow-up, we say so in the report."
      faqs={faqs.slice(0, 4)}
    />
  );
}
