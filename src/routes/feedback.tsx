import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Loader2, MessageSquareText, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { submitFeedback } from "@/lib/feedback.functions";

export const Route = createFileRoute("/feedback")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Client Feedback | INSPECTPEAK" },
      {
        name: "description",
        content:
          "Share private feedback about your INSPECTPEAK home or building inspection experience in Bhopal.",
      },
      { property: "og:title", content: "Client Feedback | INSPECTPEAK" },
      {
        property: "og:description",
        content:
          "Tell INSPECTPEAK about your inspection experience. Feedback is received privately for review.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FeedbackPage,
});

function FeedbackPage() {
  const [customerName, setCustomerName] = useState("");
  const [rating, setRating] = useState(0);
  const [service, setService] = useState("");
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(null);
    if (rating < 1) {
      setResult({ success: false, message: "Please select a star rating." });
      return;
    }

    setSubmitting(true);
    try {
      const response = await submitFeedback({
        data: { customerName, rating, service, feedback, email },
      });
      setResult(response);
      if (response.success) {
        setCustomerName("");
        setRating(0);
        setService("");
        setFeedback("");
        setEmail("");
      }
    } catch {
      setResult({
        success: false,
        message: "Your feedback could not be saved. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="blueprint-grid bg-navy px-4 pb-16 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-amber">
              Client Feedback
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              Tell Us About Your Inspection
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              Your experience helps us keep every inspection clear, thorough and useful.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <MessageSquareText className="h-8 w-8 text-primary" />
            <h2 className="mt-5 text-2xl font-bold text-foreground">
              Your feedback matters
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Share what went well or what we could improve. Feedback is kept
              private and will not appear publicly without review and approval.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div>
                <Label htmlFor="feedback-name">Your Name *</Label>
                <Input
                  id="feedback-name"
                  value={customerName}
                  onChange={(event) => setCustomerName(event.target.value)}
                  maxLength={100}
                  required
                  className="mt-1.5"
                  autoComplete="name"
                />
              </div>

              <fieldset>
                <legend className="text-sm font-medium leading-none">
                  Your Rating *
                </legend>
                <div className="mt-2 flex gap-2" role="group" aria-label="Rating">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <Button
                      key={value}
                      type="button"
                      variant={rating >= value ? "accent" : "outline"}
                      size="icon"
                      aria-label={`${value} ${value === 1 ? "star" : "stars"}`}
                      aria-pressed={rating === value}
                      onClick={() => setRating(value)}
                    >
                      <Star
                        className="h-4 w-4"
                        fill={rating >= value ? "currentColor" : "none"}
                      />
                    </Button>
                  ))}
                </div>
              </fieldset>

              <div>
                <Label htmlFor="feedback-service">Service (optional)</Label>
                <Input
                  id="feedback-service"
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  placeholder="For example, home inspection"
                  maxLength={100}
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="feedback-message">Your Feedback *</Label>
                <Textarea
                  id="feedback-message"
                  value={feedback}
                  onChange={(event) => setFeedback(event.target.value)}
                  placeholder="Tell us about your experience…"
                  minLength={10}
                  maxLength={2000}
                  rows={5}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="feedback-email">Email (optional)</Label>
                <Input
                  id="feedback-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  maxLength={255}
                  autoComplete="email"
                  className="mt-1.5"
                />
              </div>

              <Button type="submit" variant="accent" size="lg" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  "Submit Feedback"
                )}
              </Button>

              {result && (
                <p
                  role="status"
                  aria-live="polite"
                  className={
                    result.success
                      ? "text-sm text-foreground"
                      : "text-sm text-destructive"
                  }
                >
                  {result.message}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Ready to Book?"
            title="Plan Your Inspection"
            description="Send your property details and preferred date through our enquiry form."
          />
          <div className="mt-7 text-center">
            <Button variant="accent" size="lg" asChild>
              <a href="/contact">Book a Home Inspection</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}