import Link from "next/link";
import { disclaimerLine } from "@/lib/site";

export function DisclaimerLine() {
  return (
    <p>
      {disclaimerLine}{" "}
      <Link href="/disclaimer" className="underline">
        Read the full disclaimer
      </Link>
      .
    </p>
  );
}
