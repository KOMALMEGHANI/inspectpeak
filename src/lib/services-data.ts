import homeImg from "@/assets/service-home.jpg";
import structuralImg from "@/assets/service-structural.jpg";
import waterproofingImg from "@/assets/service-waterproofing.jpg";
import snaggingImg from "@/assets/service-snagging.jpg";
import designImg from "@/assets/service-design.jpg";

export type InspectionService = {
  slug: string;
  name: string;
  shortName: string;
  category: "inspection" | "design";
  image: string;
  imageAlt: string;
  intro: string;
  scope: string[];
  outcome: string;
};

export const services: InspectionService[] = [
  {
    slug: "/home-inspection",
    name: "Home Inspection",
    shortName: "Home Inspection",
    category: "inspection",
    image: homeImg,
    imageAlt:
      "Inspector examining the interior walls of a modern Indian apartment during a home inspection",
    intro:
      "A systematic, room-by-room assessment of a property's visible condition — so you know exactly what you are buying before you commit.",
    scope: [
      "Pre-purchase home inspection",
      "New home inspection",
      "Pre-handover inspection",
      "Resale property inspection",
      "Rental property condition inspection",
    ],
    outcome:
      "A clear inspection report with photographic evidence, severity ratings and practical recommendations for every observation.",
  },
  {
    slug: "/structural-inspection",
    name: "Structural & Civil Inspection",
    shortName: "Structural & Civil",
    category: "inspection",
    image: structuralImg,
    imageAlt:
      "Crack measuring scale held against a cracked concrete column during a structural inspection",
    intro:
      "An engineering-led review of visible structural distress — cracks, workmanship and construction quality — to flag what needs attention and how urgently.",
    scope: [
      "Visible cracks and structural distress assessment",
      "Wall, beam, column and slab visual inspection",
      "Dampness and seepage inspection",
      "Roof, balcony and terrace inspection",
      "Concrete and construction workmanship assessment",
    ],
    outcome:
      "Documented observations with measurements and severity levels, plus clear guidance on monitoring, repair or specialist follow-up.",
  },
  {
    slug: "/waterproofing-inspection",
    name: "Waterproofing & Leakage Inspection",
    shortName: "Waterproofing & Leakage",
    category: "inspection",
    image: waterproofingImg,
    imageAlt:
      "Inspector pointing at ceiling seepage and peeling paint near a bathroom during a waterproofing inspection",
    intro:
      "Leakage and dampness cause the most expensive post-purchase surprises. We trace visible signs of water ingress before they become repair bills.",
    scope: [
      "Bathroom and kitchen leakage checks",
      "Wall dampness detection",
      "Terrace and roof waterproofing inspection",
      "Plumbing-related visible leakage assessment",
    ],
    outcome:
      "A photographic record of every damp or seepage finding, its likely source pattern and recommended waterproofing next steps.",
  },
  {
    slug: "/snagging-inspection",
    name: "Finishing & Snagging Inspection",
    shortName: "Finishing & Snagging",
    category: "inspection",
    image: snaggingImg,
    imageAlt:
      "Inspector checking floor tile levelling with a spirit level during a snagging inspection",
    intro:
      "Before you take possession, we prepare a complete snag list of finishing defects so the builder resolves them on their budget, not yours.",
    scope: [
      "Floor and tile quality checks",
      "Door and window alignment",
      "Paint and plaster finishing",
      "Electrical point and plumbing fixture checks",
      "Snag list preparation before possession",
    ],
    outcome:
      "A structured snag list with location references and photographs, ready to share with your developer for rectification.",
  },
  {
    slug: "/design-services",
    name: "Architectural & Structural Design",
    shortName: "Design Services",
    category: "design",
    image: designImg,
    imageAlt:
      "Architectural floor plans and structural drawings with CAD drafting software on a laptop",
    intro:
      "Design and drafting support for new builds and renovations — plans, structural drawings and documentation prepared to support approvals and quoting.",
    scope: [
      "Architectural planning",
      "Structural design and drawings",
      "AutoCAD drafting",
      "Building plan and quotation support",
    ],
    outcome:
      "Clear, buildable drawings and documentation you can take to contractors and approving authorities.",
  },
];

export const inspectionServices = services.filter(
  (s) => s.category === "inspection",
);

export const designServices = services.filter((s) => s.category === "design");

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** Options for the "Required Service" select on enquiry forms. */
export const serviceOptions = [
  { value: "home-inspection", label: "Home Inspection" },
  { value: "structural-inspection", label: "Structural & Civil Inspection" },
  {
    value: "waterproofing-inspection",
    label: "Waterproofing & Leakage Inspection",
  },
  { value: "snagging-inspection", label: "Finishing & Snagging Inspection" },
  { value: "design-services", label: "Architectural & Structural Design" },
  { value: "sample-report", label: "Sample Report Request" },
  { value: "other", label: "Other / Not sure yet" },
];
