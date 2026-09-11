"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import { services } from "@/content/services";

const inputClasses =
  "w-full rounded-lg border border-forest-200 bg-surface px-4 py-2.5 text-sm text-forest-900 placeholder:text-forest-900/40 focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-200";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs font-medium text-red-600">{message}</p>;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-forest-100 bg-forest-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-forest-600" />
        <p className="font-display text-xl font-semibold text-forest-900">
          Thank you — your message is on its way.
        </p>
        <p className="max-w-sm text-sm text-forest-900/70">
          I&apos;ll get back to you as soon as I can. For anything urgent,
          please call directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-gold-700 hover:text-gold-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="ownerName"
            className="mb-1.5 block text-sm font-medium text-forest-900"
          >
            Your name
          </label>
          <input
            id="ownerName"
            className={inputClasses}
            {...register("ownerName")}
          />
          <FieldError message={errors.ownerName?.message} />
        </div>
        <div>
          <label
            htmlFor="horseName"
            className="mb-1.5 block text-sm font-medium text-forest-900"
          >
            Horse&apos;s name
          </label>
          <input
            id="horseName"
            className={inputClasses}
            {...register("horseName")}
          />
          <FieldError message={errors.horseName?.message} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-forest-900"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className={inputClasses}
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-forest-900"
          >
            Phone
          </label>
          <input id="phone" className={inputClasses} {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-sm font-medium text-forest-900"
        >
          What&apos;s this about?
        </label>
        <select
          id="service"
          className={inputClasses}
          defaultValue=""
          {...register("service")}
        >
          <option value="" disabled>
            Select a topic
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="General enquiry">General enquiry</option>
        </select>
        <FieldError message={errors.service?.message} />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-forest-900"
        >
          Tell me a little about what&apos;s going on
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputClasses}
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      {status === "error" ? (
        <p className="text-sm font-medium text-red-600">
          Something went wrong sending your message — please try again, or
          email directly.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-forest-900 transition hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        Send message
      </button>
    </form>
  );
}
