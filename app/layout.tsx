import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "F.A.L.L. Training Institute",
    template: "%s · F.A.L.L. Training Institute",
  },
  description:
    "Firearm training and FUL paperwork help in Trinidad and Tobago. Only the TTPS and the Commissioner of Police approve licences.",
  applicationName: "F.A.L.L. Training Institute",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 pb-24">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
