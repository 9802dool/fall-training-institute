"use client";

import { useActionState, useEffect, useState } from "react";
import { submitBooking } from "@/app/actions";
import { idleForm } from "@/lib/forms";
import { bookingServices } from "@/lib/site";
import { btn, inputClass, labelClass } from "@/lib/styles";

export function BookingForm() {
  const [state, action, pending] = useActionState(submitBooking, idleForm);
  const [service, setService] = useState<string>(bookingServices[0].value);

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("service");
    if (selected && bookingServices.some((item) => item.value === selected)) {
      setService(selected);
    }
  }, []);

  if (state.status === "success") {
    return (
      <p className="border border-neutral-200 bg-neutral-50 p-4" role="status">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} className="space-y-4" noValidate>
      <p className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="booking-website">Leave this blank</label>
        <input id="booking-website" name="company_website" tabIndex={-1} autoComplete="off" />
      </p>
      {state.status === "error" ? (
        <p className="text-brand" role="alert">
          {state.message}
        </p>
      ) : null}
      <div>
        <label className={labelClass} htmlFor="booking-service">
          Service
        </label>
        <select
          className={inputClass}
          id="booking-service"
          name="service"
          value={service}
          onChange={(event) => setService(event.target.value)}
          required
        >
          {bookingServices.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="booking-when">
          Preferred date and time
        </label>
        <input
          className={inputClass}
          id="booking-when"
          name="preferredDateTime"
          type="datetime-local"
          required
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="booking-name">
          Name
        </label>
        <input className={inputClass} id="booking-name" name="name" autoComplete="name" required />
      </div>
      <div>
        <label className={labelClass} htmlFor="booking-phone">
          Phone
        </label>
        <input
          className={inputClass}
          id="booking-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="booking-email">
          Email
        </label>
        <input
          className={inputClass}
          id="booking-email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="booking-note">
          Short note
        </label>
        <textarea className={inputClass} id="booking-note" name="note" rows={4} maxLength={1000} />
        <p className="mt-1 text-sm text-neutral-700">
          Do not include an ID number, a licence number, or a firearm serial.
        </p>
      </div>
      <button className={btn} type="submit" disabled={pending}>
        {pending ? "Sending…" : "Confirm booking"}
      </button>
    </form>
  );
}
