import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const paths = [
  "/",
  "/services",
  "/services/ful-application",
  "/services/appeals",
  "/services/business",
  "/services/estate",
  "/services/other",
  "/training",
  "/renewals",
  "/reminders",
  "/ful-requirements",
  "/check",
  "/fees",
  "/about",
  "/faq",
  "/book",
  "/resources",
  "/resources/2026-ful-fees",
  "/resources/provisional-licence",
  "/resources/ful-renewal-checklist",
  "/privacy",
  "/terms",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: new Date("2026-11-01"),
  }));
}
