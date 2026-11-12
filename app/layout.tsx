import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactButton } from "@/components/ContactButton";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["500", "600", "700"],
});

const description =
  "Firearm training and FUL paperwork help in Trinidad and Tobago. Only the TTPS and the Commissioner of Police approve licences.";

const ogImage = new URL("/og-image.jpg", siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "F.A.L.L. Training Institute",
    template: "%s · F.A.L.L. Training Institute",
  },
  description,
  applicationName: "F.A.L.L. Training Institute",
  alternates: { canonical: siteUrl },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "F.A.L.L. Training Institute",
    description,
    type: "website",
    locale: "en_TT",
    url: siteUrl,
    siteName: "F.A.L.L. Training Institute",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "F.A.L.L. Training Institute" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "F.A.L.L. Training Institute",
    description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-black-deep font-sans text-white antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-red focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 pb-24">
          {children}
        </main>
        <Footer />
        <ContactButton />
      </body>
    </html>
  );
}
