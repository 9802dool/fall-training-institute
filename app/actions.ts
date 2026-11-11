"use server";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import type { FormState } from "@/lib/forms";

function clean(value: FormDataEntryValue | null, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, max);
}

function emailOk(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function phoneOk(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

async function storePlaceholder(kind: string, payload: Record<string, string>) {
  console.info("[fall]", kind, payload);
  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "submissions.ndjson"),
      `${JSON.stringify({ kind, at: new Date().toISOString(), payload })}\n`,
      "utf8",
    );
  } catch (error) {
    console.info("[fall] local placeholder was not written", error);
  }
  // TODO(phase-2): email delivery + store in Supabase
}

function ignoredSpam(formData: FormData) {
  return clean(formData.get("company_website"), 200).length > 0;
}

export async function submitBooking(
  _previous: FormState,
  formData: FormData,
): Promise<FormState> {
  if (ignoredSpam(formData)) {
    return {
      status: "success",
      message:
        "We have your request. We will confirm by WhatsApp or email. This is not a confirmed appointment until we reply.",
    };
  }

  const payload = {
    service: clean(formData.get("service"), 80),
    preferredDateTime: clean(formData.get("preferredDateTime"), 40),
    name: clean(formData.get("name"), 120),
    phone: clean(formData.get("phone"), 40),
    email: clean(formData.get("email"), 160),
    note: clean(formData.get("note"), 1000),
  };

  if (!payload.service) return { status: "error", message: "Choose a service." };
  if (!payload.preferredDateTime) {
    return { status: "error", message: "Choose a preferred date and time." };
  }
  if (!payload.name) return { status: "error", message: "Enter your name." };
  if (!phoneOk(payload.phone)) {
    return { status: "error", message: "Enter a phone number we can reach you on." };
  }
  if (!emailOk(payload.email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  await storePlaceholder("booking", payload);
  return {
    status: "success",
    message:
      "We have your request. We will confirm by WhatsApp or email. This is not a confirmed appointment until we reply.",
  };
}

export async function submitReminder(
  _previous: FormState,
  formData: FormData,
): Promise<FormState> {
  if (ignoredSpam(formData)) {
    return {
      status: "success",
      message:
        "You are on the list. We will email you before the deadlines you named. To stop, email us.",
    };
  }

  const payload = {
    name: clean(formData.get("name"), 120),
    email: clean(formData.get("email"), 160),
    phone: clean(formData.get("phone"), 40),
    expiryMonth: clean(formData.get("expiryMonth"), 7),
  };

  if (!payload.name) return { status: "error", message: "Enter your name." };
  if (!emailOk(payload.email)) {
    return { status: "error", message: "Enter a valid email address." };
  }
  if (!phoneOk(payload.phone)) {
    return { status: "error", message: "Enter a phone number we can reach you on." };
  }
  if (!/^\d{4}-\d{2}$/.test(payload.expiryMonth)) {
    return { status: "error", message: "Choose the month your licence expires." };
  }
  if (formData.get("consent") !== "yes") {
    return {
      status: "error",
      message: "Tick the box to agree to reminder emails. We will not add you without it.",
    };
  }

  await storePlaceholder("reminder", { ...payload, consent: "yes" });
  return {
    status: "success",
    message:
      "You are on the list. We will email you before the deadlines you named. To stop, email Fallfirearmstt@gmail.com.",
  };
}

export async function submitEnquiry(
  _previous: FormState,
  formData: FormData,
): Promise<FormState> {
  if (ignoredSpam(formData)) {
    return {
      status: "success",
      message: "We have your enquiry. We will reply by phone or email.",
    };
  }

  const payload = {
    company: clean(formData.get("company"), 160),
    contact: clean(formData.get("contact"), 120),
    phone: clean(formData.get("phone"), 40),
    email: clean(formData.get("email"), 160),
    staffCount: clean(formData.get("staffCount"), 10),
  };

  if (!payload.company) return { status: "error", message: "Enter the company name." };
  if (!payload.contact) return { status: "error", message: "Enter a contact name." };
  if (!phoneOk(payload.phone)) {
    return { status: "error", message: "Enter a phone number we can reach you on." };
  }
  if (!emailOk(payload.email)) {
    return { status: "error", message: "Enter a valid email address." };
  }
  if (!/^\d{1,4}$/.test(payload.staffCount)) {
    return { status: "error", message: "Enter how many staff you want us to track." };
  }

  await storePlaceholder("business-enquiry", payload);
  return {
    status: "success",
    message: "We have your enquiry. We will reply by phone or email.",
  };
}
