import { createServerFn } from "@tanstack/react-start";
import { feedbackSchema } from "@/lib/feedback-schema";

export const submitFeedback = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => {
    const parsed = feedbackSchema.safeParse(input);
    if (!parsed.success) {
      throw Object.assign(new Error("Please check your feedback details."), {
        status: 400,
      });
    }
    return parsed.data;
  })
  .handler(async ({ data }) => {
    try {
      const { supabaseAdmin } = await import(
        "@/integrations/supabase/client.server"
      );
      const { error } = await supabaseAdmin.from("client_feedback").insert({
        customer_name: data.customerName,
        rating: data.rating,
        service: data.service || null,
        feedback: data.feedback,
        email: data.email || null,
      });

      if (error) {
        console.error("[feedback] submission failed:", error.message);
        return {
          success: false as const,
          message: "Your feedback could not be saved. Please try again.",
        };
      }

      return {
        success: true as const,
        message:
          "Thank you for sharing your feedback. It has been received privately for review.",
      };
    } catch (error) {
      console.error("[feedback] unexpected error:", error);
      return {
        success: false as const,
        message: "Your feedback could not be saved. Please try again.",
      };
    }
  });