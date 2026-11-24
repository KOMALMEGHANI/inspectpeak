import { describe, expect, it } from "vitest";
import { feedbackSchema } from "@/lib/feedback-schema";

const validFeedback = {
  customerName: "A Customer",
  rating: 5,
  service: "Home inspection",
  feedback: "The inspection findings were clear and useful.",
  email: "customer@example.com",
};

describe("client feedback validation", () => {
  it("accepts ratings from one through five stars", () => {
    expect(feedbackSchema.safeParse({ ...validFeedback, rating: 1 }).success).toBe(true);
    expect(feedbackSchema.safeParse({ ...validFeedback, rating: 5 }).success).toBe(true);
  });

  it("rejects ratings outside the one-to-five star range", () => {
    expect(feedbackSchema.safeParse({ ...validFeedback, rating: 0 }).success).toBe(false);
    expect(feedbackSchema.safeParse({ ...validFeedback, rating: 6 }).success).toBe(false);
  });
});
