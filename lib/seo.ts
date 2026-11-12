import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

const ogImage = new URL("/og-image.jpg", siteUrl).toString();

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, siteUrl).toString();
  const home = path === "/";

  return {
    title: home ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_TT",
      url,
      siteName: "F.A.L.L. Training Institute",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "F.A.L.L. Training Institute",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
