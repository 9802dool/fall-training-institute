import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { officialLinks, site } from "@/lib/site";

export const metadata = pageMetadata(
  "FUL guides",
  "Plain-English guides to Firearm User’s Licence rules in Trinidad and Tobago, kept up to date.",
  "/resources",
);

const posts = [
  {
    href: "/resources/2026-ful-fees",
    title: "2026 FUL fees explained",
    text: "The official table from Legal Notice 489 of 2025, and why an older “no fee” line is out of date.",
  },
  {
    href: "/resources/provisional-licence",
    title: "Provisional licence: what it lets you do",
    text: "Two months of training, only at the range named on the licence, with an FUL holder supervising.",
  },
  {
    href: "/resources/ful-renewal-checklist",
    title: "FUL renewal checklist",
    text: "What a 3-year renewal needs, including the note on licences issued before 31 May 2004.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Guides and updates"
        lede="Plain-English guides to the rules, kept up to date."
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm font-semibold text-silver">Last checked: {site.lastChecked}</p>
        <ul className="mt-6 space-y-4">
          {posts.map((post) => (
            <li key={post.href}>
              <Link href={post.href} className="card block p-5 no-underline">
                <h2 className="font-heading text-2xl text-white underline decoration-red underline-offset-4">
                  {post.title}
                </h2>
                <p className="mt-2 text-silver-light">{post.text}</p>
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="section-title mt-10 text-xl">Official pages</h2>
        <ul className="mt-6 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            <a className="underline decoration-red underline-offset-4" href={officialLinks.ttpsLicences}>
              TTPS licences
            </a>
          </li>
          <li>
            <a
              className="underline decoration-red underline-offset-4"
              href={officialLinks.governmentPrintery}
            >
              Government Printery
            </a>
          </li>
          <li>
            <a
              className="underline decoration-red underline-offset-4"
              href={officialLinks.certificateOfCharacter}
            >
              TTPS Certificate of Character
            </a>
          </li>
          <li>
            <a
              className="underline decoration-red underline-offset-4"
              href={officialLinks.certificateOfCharacterApply}
            >
              Apply for a Certificate of Character
            </a>
          </li>
          <li>
            <a className="underline decoration-red underline-offset-4" href={officialLinks.gazette}>
              2026 Gazette
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
