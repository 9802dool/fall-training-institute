"use client";

import { useState } from "react";
import { inputClass, labelClass } from "@/lib/styles";

function shiftIso(iso: string, years: number, months: number) {
  const [year, month, day] = iso.split("-").map(Number);
  const cursor = new Date(Date.UTC(year + years, month - 1 + months, 1));
  const lastDay = new Date(
    Date.UTC(cursor.getUTCFullYear(), cursor.getUTCMonth() + 1, 0),
  ).getUTCDate();
  cursor.setUTCDate(Math.min(day, lastDay));
  return cursor.toISOString().slice(0, 10);
}

function formatLong(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function RenewalDateHelper() {
  const [issue, setIssue] = useState("");
  const due = issue ? shiftIso(issue, 3, 0) : "";
  const start = issue ? shiftIso(issue, 3, -3) : "";
  const beforeRuling = issue !== "" && issue <= "2004-05-31";

  return (
    <form
      className="card mt-6 p-5"
      onSubmit={(event) => event.preventDefault()}
    >
      <h2 className="section-title text-lg">When is my renewal due?</h2>
      <p className="mt-4 text-sm text-silver">
        This stays on your device. We do not save the date.
      </p>
      <div className="mt-4">
        <label className={labelClass} htmlFor="issue-date">
          Licence issue date
        </label>
        <input
          className={inputClass}
          id="issue-date"
          type="date"
          value={issue}
          onChange={(event) => setIssue(event.target.value)}
        />
      </div>
      {due ? (
        <div className="mt-4 space-y-2" aria-live="polite">
          <p>
            <span className="font-semibold">Due date: </span>
            {formatLong(due)} (issue date plus 3 years)
          </p>
          <p>
            <span className="font-semibold">A sensible time to start: </span>
            {formatLong(start)} (about 3 months before)
          </p>
          {beforeRuling ? (
            <p>
              This date is before 31 May 2004. A March 2025 High Court ruling said licences from
              before that date had not expired. Talk to an attorney before you rely on this
              calculator. The yearly fee still applies.
            </p>
          ) : (
            <p>This calculator fits licences issued after 31 May 2004.</p>
          )}
          <p>The yearly fee is separate. Confirm 31 March with the TTPS.</p>
        </div>
      ) : null}
    </form>
  );
}
