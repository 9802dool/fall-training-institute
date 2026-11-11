"use client";

import { useActionState } from "react";
import { submitEnquiry } from "@/app/actions";
import { idleForm } from "@/lib/forms";
import { btn, inputClass, labelClass } from "@/lib/styles";

export function EnquiryForm() {
  const [state, action, pending] = useActionState(submitEnquiry, idleForm);

  if (state.status === "success") {
    return (
      <p className="border border-neutral-200 bg-neutral-50 p-4" role="status">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} className="mt-6 space-y-4" noValidate>
      <p className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="enquiry-website">Leave this blank</label>
        <input id="enquiry-website" name="company_website" tabIndex={-1} autoComplete="off" />
      </p>
      {state.status === "error" ? (
        <p className="text-brand" role="alert">
          {state.message}
        </p>
      ) : null}
      <div>
        <label className={labelClass} htmlFor="enquiry-company">
          Company
        </label>
        <input className={inputClass} id="enquiry-company" name="company" required />
      </div>
      <div>
        <label className={labelClass} htmlFor="enquiry-contact">
          Contact name
        </label>
        <input className={inputClass} id="enquiry-contact" name="contact" autoComplete="name" required />
      </div>
      <div>
        <label className={labelClass} htmlFor="enquiry-phone">
          Phone
        </label>
        <input className={inputClass} id="enquiry-phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <div>
        <label className={labelClass} htmlFor="enquiry-email">
          Email
        </label>
        <input
          className={inputClass}
          id="enquiry-email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="enquiry-staff">
          Number of staff
        </label>
        <input
          className={inputClass}
          id="enquiry-staff"
          name="staffCount"
          inputMode="numeric"
          required
        />
        <p className="mt-1 text-sm text-neutral-700">
          A count is enough. Do not send ID numbers, licence numbers, or firearm serials.
        </p>
      </div>
      <button className={btn} type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
