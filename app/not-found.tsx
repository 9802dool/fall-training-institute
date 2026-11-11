import Link from "next/link";
import { btn } from "@/lib/styles";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-heading text-4xl">That page is not here.</h1>
      <p className="mt-4 text-lg">The link may be old. You can go back to the home page.</p>
      <Link className={`${btn} mt-6`} href="/">
        Back to home
      </Link>
    </div>
  );
}
