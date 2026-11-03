import { createFileRoute } from "@tanstack/react-router";
import { faqs } from "@/lib/faqs";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService } from "@/lib/services-data";

export const Route = createFileRoute("/structural-inspection")({
  head: () => ({
    meta: [
      {
        title:
          "Structural Inspection Services | Building & Structural Distress Assessment — INSPECTPEAK",
      },
      {
        name: "description",
        content:
          "Engineering-led structural and civil inspection: visible cracks, wall, beam, column and slab assessment, dampness, roof and balcony inspection, and construction workmanship review.",
      },
      {
        property: "og:title",
        content: "Structural & Civil Inspection — INSPECTPEAK",
      },
      {
        property: "og:description",
        content:
          "Visible cracks, structural distress, workmanship and construction quality assessed by our engineering team.",
      },
      { property: "og:url", content: "/structural-inspection" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/structural-inspection" }],
  }),
  component: StructuralInspectionPage,
});

const service = getService("/structural-inspection")!;

function StructuralInspectionPage() {
  return (
    <ServiceDetail
      service={service}
      highlights={[
        "Visual assessment of cracks and structural distress with measurements",
        "Wall, beam, column and slab visual inspection",
        "Roof, balcony and terrace condition review",
        "Concrete and construction workmanship assessment",
      ]}
      note="This is a visual engineering assessment, not a laboratory or non-destructive testing service. Where findings suggest deeper investigation is warranted, the report will say so clearly — with recommended next steps."
      faqs={[faqs[0]!, faqs[3]!, faqs[4]!, faqs[6]!]}
    />
  );
}
