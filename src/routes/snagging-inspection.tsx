import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService } from "@/lib/services-data";

export const Route = createFileRoute("/snagging-inspection")({
  head: () => ({
    meta: [
      {
        title:
          "Snagging Inspection Before Possession | Finishing Quality Check — INSPECTPEAK",
      },
      {
        name: "description",
        content:
          "Finishing and snagging inspection before possession: floor and tile quality, door and window alignment, paint and plaster finishing, electrical and plumbing fixture checks — with a structured snag list.",
      },
      {
        property: "og:title",
        content: "Finishing & Snagging Inspection — INSPECTPEAK",
      },
      {
        property: "og:description",
        content:
          "A complete snag list before possession, so the builder resolves defects on their budget, not yours.",
      },
      { property: "og:url", content: "/snagging-inspection" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/snagging-inspection" }],
  }),
  component: SnaggingInspectionPage,
});

const service = getService("/snagging-inspection")!;

function SnaggingInspectionPage() {
  return (
    <ServiceDetail
      service={service}
      highlights={[
        "Floor and tile quality — levelling, joints, hollow tiles",
        "Door and window alignment and operation checks",
        "Paint, plaster and finishing quality review",
        "Structured snag list ready to share with your developer",
      ]}
      note="The best time for a snagging inspection is after finishing work is complete but before you accept possession. Bring your developer's possession notice date into the conversation — we'll help you plan the timing."
      faqs={[faqs[1], faqs[2], faqs[3], faqs[4], faqs[6]]}
    />
  );
}
