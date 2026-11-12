"use client";

import { useActionState } from "react";
import { submitReminder } from "@/app/actions";
import { idleForm } from "@/lib/forms";
import { btn, errorClass, inputClass, labelClass, noticeClass } from "@/lib/styles";

export function ReminderForm() {
  const [state, action, pending] = useActionState(submitReminder, idleForm);

  if (state.status === "success") {
    return (
      <p className={noticeClass} role="status">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} className="space-y-4" noValidate>
      <Honeypot />
      {state.status === "error" ? (
        <p className={errorClass} role="alert">
          {state.message}
        </p>
      ) : null}
      <div>
        <label className={labelClass} htmlFor="reminder-name">
          Name
        </label>
        <input className={inputClass} id="reminder-name" name="name" autoComplete="name" required />
      </div>
      <div>
        <label className={labelClass} htmlFor="reminder-email">
          Email
        </label>
        <input
          className={inputClass}
          id="reminder-email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="reminder-phone">
          Phone
        </label>
        <input
          className={inputClass}
          id="reminder-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="reminder-month">
          Month your licence expires
        </label>
        <input className={inputClass} id="reminder-month" name="expiryMonth" type="month" required />
      </div>
      <div className="flex items-start gap-3">
        <input
          id="reminder-consent"
          name="consent"
          type="checkbox"
          value="yes"
          required
          className="mt-1 h-5 w-5"
        />
        <label htmlFor="reminder-consent" className="text-sm leading-relaxed">
          I agree to receive reminder emails about the yearly fee, my renewal, and documents that
          expire. I can stop these emails at any time.
        </label>
      </div>
      <button className={btn} type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send me reminders"}
      </button>
    </form>
  );
}

function Honeypot() {
  return (
    <p className="absolute -left-[9999px]" aria-hidden="true">
      <label htmlFor="company_website">Leave this blank</label>
      <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
    </p>
  );
}
