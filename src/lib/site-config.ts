/*
 * INSPECTPEAK — site-wide settings.
 *
 * Contact details below are the client's confirmed details — display exactly
 * as written and do not change or invent information.
 */

export const siteConfig = {
  name: "INSPECTPEAK",
  legalName: "INSPECTPEAK",
  tagline: "Every Detail. Inspected.",
  description:
    "Professional home inspection and building inspection services in Bhopal, Madhya Pradesh — pre-purchase inspections, structural assessments, waterproofing checks and snagging reports.",

  /**
   * WhatsApp: digits only, with country code, e.g. "919876543210".
   * The published phone number (0755 4328447) is a landline and cannot be
   * used on WhatsApp, so the button keeps this placeholder until a WhatsApp
   * mobile number is provided — clicking shows a polite notice meanwhile.
   */
  whatsappNumber: "91XXXXXXXXXX",
  whatsappDefaultMessage:
    "Hello INSPECTPEAK, I would like to enquire about a home inspection.",

  // Confirmed contact details — display exactly.
  phone: "0755 4328447",
  email: "info.inspectpeak@gmail.com",
  address: "Bhopal, Madhya Pradesh",

  // Service area wording used for local-SEO blocks.
  serviceArea: "Bhopal, Madhya Pradesh",

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
