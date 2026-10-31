import { useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
import { submitEnquiry } from "@/lib/enquiry.functions";
import { serviceOptions } from "@/lib/services-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const propertyTypes = [
  "Apartment / Flat",
  "Independent House",
  "Villa",
  "Plot + Under Construction",
  "Commercial Property",
  "Other",
];

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  propertyLocation: string;
  propertyType: string;
  propertyArea: string;
  requiredService: string;
  preferredDate: string;
  additionalDetails: string;
};

const emptyForm: FormState = {
  fullName: "",
  phone: "",
  email: "",
  propertyLocation: "",
  propertyType: "",
  propertyArea: "",
  requiredService: "",
  preferredDate: "",
  additionalDetails: "",
};

type ContactFormProps = {
  preselectedService?: string;
  className?: string;
};

export function ContactForm({ preselectedService, className }: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    ...emptyForm,
    requiredService:
      preselectedService && serviceOptions.some((o) => o.value === preselectedService)
        ? preselectedService
        : "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(
    null,
  );

  const set = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.fullName.trim().length < 2) next.fullName = "Please enter your full name.";
    if (!/^[+]?[\d\s()-]{8,16}$/.test(form.phone.trim()))
      next.phone = "Please enter a valid phone number.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!form.requiredService) next.requiredService = "Please select a service.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setResult(null);
    if (!validate()) return;

    setSubmitting(true);
    try {
      const response = await submitEnquiry({
        data: {
          fullName: form.fullName,
          phone: form.phone,
          email: form.email,
          propertyLocation: form.propertyLocation,
          propertyType: form.propertyType,
          propertyArea: form.propertyArea,
          requiredService: form.requiredService,
          preferredDate: form.preferredDate,
          additionalDetails: form.additionalDetails,
        },
      });
      setResult(response);
      if (response.success) setForm(emptyForm);
    } catch {
      setResult({
        success: false,
        message:
          "Sorry — your enquiry could not be sent right now. Please try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const fieldClass = "mt-1.5";
  const errorClass = "mt-1 text-xs font-medium text-destructive";

  return (
    <form onSubmit={onSubmit} noValidate className={cn("space-y-5", className)}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            value={form.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            placeholder="Your name"
            maxLength={100}
            className={fieldClass}
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+91 98XXX XXXXX"
            maxLength={16}
            className={fieldClass}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@example.com"
            maxLength={255}
            className={fieldClass}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="propertyLocation">Property Location</Label>
          <Input
            id="propertyLocation"
            value={form.propertyLocation}
            onChange={(e) => set("propertyLocation", e.target.value)}
            placeholder="City / area of the property"
            maxLength={160}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="propertyType">Property Type</Label>
          <Select
            value={form.propertyType}
            onValueChange={(v) => set("propertyType", v)}
          >
            <SelectTrigger id="propertyType" className={cn(fieldClass, "w-full")}>
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="propertyArea">Property Area</Label>
          <Input
            id="propertyArea"
            value={form.propertyArea}
            onChange={(e) => set("propertyArea", e.target.value)}
            placeholder="e.g. 1200 sq ft / 3 BHK"
            maxLength={80}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="requiredService">Required Service *</Label>
          <Select
            value={form.requiredService}
            onValueChange={(v) => set("requiredService", v)}
          >
            <SelectTrigger
              id="requiredService"
              className={cn(fieldClass, "w-full")}
              aria-invalid={!!errors.requiredService}
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.requiredService && (
            <p className={errorClass}>{errors.requiredService}</p>
          )}
        </div>
        <div>
          <Label htmlFor="preferredDate">Preferred Inspection Date</Label>
          <Input
            id="preferredDate"
            type="date"
            value={form.preferredDate}
            onChange={(e) => set("preferredDate", e.target.value)}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="additionalDetails">Additional Details</Label>
        <Textarea
          id="additionalDetails"
          value={form.additionalDetails}
          onChange={(e) => set("additionalDetails", e.target.value)}
          placeholder="Tell us about the property, its stage (ready / under construction), or any specific concerns…"
          rows={4}
          maxLength={2000}
          className={fieldClass}
        />
      </div>

      <Button
        type="submit"
        variant="accent"
        size="lg"
        disabled={submitting}
        className="w-full sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending enquiry…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Enquiry
          </>
        )}
      </Button>

      {result && (
        <div
          role="status"
          aria-live="polite"
          className={cn(
            "rounded-lg border p-4 text-sm leading-relaxed",
            result.success
              ? "border-[oklch(0.62_0.17_152)]/40 bg-[oklch(0.62_0.17_152)]/10 text-[oklch(0.42_0.12_152)]"
              : "border-destructive/40 bg-destructive/10 text-destructive",
          )}
        >
          {result.message}
        </div>
      )}
    </form>
  );
}
