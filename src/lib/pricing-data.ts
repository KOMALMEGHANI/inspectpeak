export type PricingPlan = {
  id: string;
  name: string;
  tagline: string;
  originalPrice: string;
  discountedPrice: string;
  unit: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "pro",
    name: "PRO PLAN",
    tagline: "Single Visit (Pre-Purchase / Handover)",
    originalPrice: "₹ 19,999",
    discountedPrice: "₹ 5,999.00",
    unit: "+ GST",
    badge: "ESSENTIAL",
    features: [
      "Tile finish check",
      "Door alignment & function",
      "Paint defect inspection",
      "All Electrical fittings inspection",
      "Bathroom fittings check",
      "Slope check (balconies & bathrooms)",
      "Leakages detection",
      "Thermal Imaging for Paint Dampness",
      "Room area measurement inch-by-inch",
      "Comprehensive inspection report",
    ],
    ctaLabel: "Choose PRO PLAN",
    ctaHref: "/contact?plan=pro",
  },
  {
    id: "advance",
    name: "ADVANCE PLAN",
    tagline: "Double Visit (With Re - Visit)",
    originalPrice: "₹ 24,999",
    discountedPrice: "₹ 9,999.00",
    unit: "+ GST",
    badge: "MOST POPULAR",
    isPopular: true,
    features: [
      "Tile finish check",
      "Door alignment & function",
      "Paint defect inspection",
      "All Electrical fittings inspection",
      "Bathroom fittings check",
      "Slope check (balconies & bathrooms)",
      "Leakages detection",
      "Thermal Imaging for Paint Dampness",
      "Room area measurement inch-by-inch",
      "Comprehensive inspection report",
      "Re-visit to ensure corrections",
      "Defect rectification verification",
    ],
    ctaLabel: "Choose ADVANCE PLAN",
    ctaHref: "/contact?plan=advance",
  },
  {
    id: "villa",
    name: "PREMIUM VILLA PLAN",
    tagline: "Double Visit + Full Civil & Structural Audit",
    originalPrice: "₹ 34,999",
    discountedPrice: "₹ 14,999.00",
    unit: "+ GST",
    badge: "VILLAS & DUPLEX",
    features: [
      "Everything in Advance Plan included",
      "Terrace & roof waterproofing review",
      "Structural column, beam & slab load check",
      "External facade & boundary wall audit",
      "Plumbing pressure & drainage slope testing",
      "2 Re-visits for contractor rectification",
      "Dedicated senior structural engineer visit",
      "Priority 24-hr report delivery",
    ],
    ctaLabel: "Choose VILLA PLAN",
    ctaHref: "/contact?plan=villa",
  },
];

export const pricingFaqs = [
  {
    q: "What is included in the 'Re-visit' of the Advance Plan?",
    a: "After our initial inspection, you receive an exhaustive snag list to share with your builder or contractor. Once they claim to have fixed the issues, our engineer visits your property a second time to verify whether the rectifications were done properly according to engineering standards.",
  },
  {
    q: "Why is Thermal Imaging important for dampness?",
    a: "Thermal imaging cameras detect temperature differentials caused by hidden moisture behind freshly painted walls and under floor tiles, exposing active seepages that the naked eye cannot see before you make a payment.",
  },
  {
    q: "Are these prices valid for both Bhopal and Indore?",
    a: "Yes! Our inspection packages have transparent and uniform pricing across both Bhopal and Indore, Madhya Pradesh without any surprise travel surcharges within city limits.",
  },
  {
    q: "How soon do I receive the inspection report?",
    a: "You will receive a comprehensive digital report with high-resolution photographic evidence, defect severity ratings, and actionable recommendations within 24 to 48 hours of the site inspection.",
  },
];
