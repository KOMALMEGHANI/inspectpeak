/*
 * INSPECTPEAK — site-wide settings.
 *
 * Everything below is a clearly marked placeholder. Replace the values with
 * the real company details — every part of the site (header, footer, contact
 * page, WhatsApp button, enquiry form) reads from this single file.
 */

export const siteConfig = {
  name: "INSPECTPEAK",
  legalName: "INSPECTPEAK",
  tagline: "Every Detail. Inspected.",
  description:
    "Professional home inspection and building inspection services in India — pre-purchase inspections, structural assessments, waterproofing checks and snagging reports.",

  /**
   * WhatsApp: digits only, with country code, e.g. "919876543210".
   * While the value contains "X" placeholders, the WhatsApp button shows a
   * polite notice instead of opening a wrong chat.
   */
  whatsappNumber: "91XXXXXXXXXX",
  whatsappDefaultMessage:
    "Hello INSPECTPEAK, I would like to enquire about a home inspection.",

  // Placeholder contact details — replace with the real ones.
  phone: "+91 XXXXX XXXXX",
  email: "contact@inspectpeak.in",
  address: "Office address to be updated — replace in src/lib/site-config.ts",

  // Service area wording used for local-SEO blocks.
  serviceArea: "India",

  // Social links — leave as "" to hide an icon in the footer.
  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
    youtube: "",
  },
} as const;

/** True while the WhatsApp number is still an editable placeholder. */
export function isWhatsAppConfigured() {
  return /^\d{10,15}$/.test(siteConfig.whatsappNumber);
}

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
