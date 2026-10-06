"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";

const inquiries = [
  "Producer partnership",
  "Investment",
  "Research collaboration",
  "Press",
  "Other",
];

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  company: z.string().min(1, "Please enter your company."),
  inquiry: z.string().min(1, "Please choose an option."),
  message: z.string().min(10, "Please write at least 10 characters."),
});

type FormValues = z.infer<typeof schema>;

const field =
  "h-11 w-full border border-ink/15 bg-white px-3 text-sm transition-colors focus-visible:border-cobalt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt aria-[invalid=true]:border-red-700";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}{" "}
        <span aria-hidden="true" className="text-cobalt">
          *
        </span>
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 text-xs text-red-700"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { inquiry: "" },
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 900)); // demo only: nothing is sent
    setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="flex min-h-[420px] flex-col justify-center">
        <span className="flex size-12 items-center justify-center bg-cobalt text-white">
          <Check aria-hidden="true" className="size-6" />
        </span>
        <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em]">
          Message received.
        </h2>
        <p className="mt-3 max-w-sm text-sm text-muted">
          Thank you. This form is a demo, so nothing was actually sent. In a
          real build it would reach the RURA team.
        </p>
        <div className="mt-8">
          <Button
            variant="outline"
            onClick={() => {
              reset();
              setSent(false);
            }}
          >
            Send another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <Field id="name" label="Name" error={errors.name?.message}>
        <input
          id="name"
          autoComplete="name"
          placeholder="Your name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={field}
          {...register("name")}
        />
      </Field>
      <Field id="email" label="Email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={field}
          {...register("email")}
        />
      </Field>
      <Field id="company" label="Company" error={errors.company?.message}>
        <input
          id="company"
          autoComplete="organization"
          placeholder="Company name"
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "company-error" : undefined}
          className={field}
          {...register("company")}
        />
      </Field>
      <Field
        id="inquiry"
        label="How can we help?"
        error={errors.inquiry?.message}
      >
        <select
          id="inquiry"
          aria-invalid={!!errors.inquiry}
          aria-describedby={errors.inquiry ? "inquiry-error" : undefined}
          className={field}
          {...register("inquiry")}
        >
          <option value="">Select one…</option>
          {inquiries.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </Field>
      <Field id="message" label="Message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={6}
          placeholder="Type your message…"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${field} h-auto py-3`}
          {...register("message")}
        />
      </Field>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
      <p className="text-xs text-muted">
        Demo form: submissions are not stored or sent anywhere.
      </p>
    </form>
  );
}
