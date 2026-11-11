import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata(
  "FUL guides",
  "Plain-English guides to Firearm User’s Licence rules in Trinidad and Tobago, kept up to date.",
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
        <p className="text-sm font-semibold text-neutral-700">Last checked: {site.lastChecked}</p>
        <ul className="mt-6 space-y-4">
          {posts.map((post) => (
            <li key={post.href} className="border border-neutral-200 p-4">
              <h2 className="font-heading text-2xl">
                <Link className="underline underline-offset-4" href={post.href}>
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2">{post.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
