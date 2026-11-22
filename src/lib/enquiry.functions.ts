import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name must be under 100 characters."),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[\d\s()-]{8,16}$/, "Please enter a valid phone number."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(255)
    .optional()
    .or(z.literal("")),
  propertyLocation: z.string().trim().max(160).optional().or(z.literal("")),
  propertyType: z.string().trim().max(80).optional().or(z.literal("")),
  propertyArea: z.string().trim().max(80).optional().or(z.literal("")),
  requiredService: z.string().trim().min(1, "Please select a service.").max(80),
  preferredDate: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please provide a valid date.")
    .optional()
    .or(z.literal("")),
  additionalDetails: z
    .string()
    .trim()
    .max(2000, "Please keep details under 2000 characters.")
    .optional()
    .or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    const parsed = enquirySchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      throw Object.assign(new Error("Validation failed"), {
        fieldErrors,
        status: 400,
      });
    }
    return parsed.data;
  })
  .handler(async ({ data }) => {
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { error } = await supabaseAdmin.from("contact_enquiries").insert({
        full_name: data.fullName,
        phone: data.phone,
        email: data.email || null,
        property_location: data.propertyLocation || null,
        property_type: data.propertyType || null,
        property_area: data.propertyArea || null,
        required_service: data.requiredService,
        preferred_date: data.preferredDate || null,
        additional_details: data.additionalDetails || null,
      });

      if (error) {
        console.error("[enquiry] insert failed:", error.message);
        return {
          success: false as const,
          message:
            "Sorry — your enquiry could not be saved. Please try again in a moment, or reach us on WhatsApp.",
        };
      }

      return {
        success: true as const,
        message:
          "Thank you — your enquiry has been received. Our team will review your property details and get back to you shortly to confirm your inspection.",
      };
    } catch (err) {
      console.error("[enquiry] unexpected error:", err);
      return {
        success: false as const,
        message: "Sorry — something went wrong on our side. Please try again in a moment.",
      };
    }
  });
