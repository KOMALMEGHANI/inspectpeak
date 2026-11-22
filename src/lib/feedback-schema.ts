import { z } from "zod";

export const feedbackSchema = z.object({
  customerName: z.string().trim().min(2).max(100),
  rating: z.number().int().min(1).max(5),
  service: z.string().trim().max(100).optional().or(z.literal("")),
  feedback: z.string().trim().min(10).max(2000),
  email: z.string().trim().email().max(255).optional().or(z.literal("")),
});

export type FeedbackInput = z.infer<typeof feedbackSchema>;
