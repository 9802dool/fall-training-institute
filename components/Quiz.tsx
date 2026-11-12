"use client";

import Link from "next/link";
import { useState } from "react";
import { stage1Items } from "@/lib/checklist";
import { btn, btnSecondary } from "@/lib/styles";

type OutcomeId = "under-25" | "already" | "restricted" | "dv" | "reason" | "ready" | "docs";

type Option = { label: string; outcome?: OutcomeId };

const steps: { prompt: string; options: Option[] }[] = [
  {
    prompt: "Are you 25 or older?",
    options: [{ label: "Yes" }, { label: "No", outcome: "under-25" }],
  },
  {
    prompt: "Do you already hold an FUL?",
    options: [{ label: "Yes", outcome: "already" }, { label: "No" }],
  },
  {
    prompt:
      "In the last 5 years, were you jailed over 3 months for a violent offence, or declared a restricted person?",
    options: [{ label: "Yes", outcome: "restricted" }, { label: "No" }],
  },
  {
    prompt: "Any Domestic Violence Act conviction in the last 5 years?",
    options: [{ label: "Yes", outcome: "dv" }, { label: "No" }],
  },
  {
    prompt: "Can you explain a good reason (for example, safety risk, cash handling, job)?",
    options: [
      { label: "Yes" },
      { label: "Not sure", outcome: "reason" },
      { label: "No", outcome: "reason" },
    ],
  },
  {
    prompt: "Do you have a valid ID and can you get a Certificate of Character?",
    options: [
      { label: "Yes", outcome: "ready" },
      { label: "No", outcome: "docs" },
      { label: "Not sure", outcome: "docs" },
    ],
  },
];

export function Quiz() {
  const [step, setStep] = useState(0);
  const [outcome, setOutcome] = useState<OutcomeId | null>(null);
  const current = steps[step];

  function choose(option: Option) {
    if (option.outcome) {
      setOutcome(option.outcome);
      return;
    }
    setStep((value) => Math.min(value + 1, steps.length - 1));
  }

  function back() {
    if (outcome) {
      setOutcome(null);
      return;
    }
    setStep((value) => Math.max(0, value - 1));
  }

  function restart() {
    setStep(0);
    setOutcome(null);
  }

  return (
    <div className="card p-5 sm:p-6">
      <p className="text-sm text-silver">
        Your answers stay on this device. We do not save them.
      </p>
      {outcome ? (
        <div className="mt-4" aria-live="polite">
          <Outcome id={outcome} />
        </div>
      ) : (
        <div className="mt-4" aria-live="polite">
          <p className="text-sm font-semibold text-red">
            Question {step + 1} of {steps.length}
          </p>
          <h2 className="mt-2 font-heading text-2xl text-white">{current.prompt}</h2>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            {current.options.map((option) => (
              <button key={option.label} type="button" className={btn} onClick={() => choose(option)}>
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        {step > 0 || outcome ? (
          <button type="button" className="font-semibold underline underline-offset-4" onClick={back}>
            Back
          </button>
        ) : null}
        {step > 0 || outcome ? (
          <button type="button" className="font-semibold underline underline-offset-4" onClick={restart}>
            Start again
          </button>
        ) : null}
      </div>
    </div>
  );
}

function Outcome({ id }: { id: OutcomeId }) {
  if (id === "under-25") {
    return (
      <>
        <h2 className="font-heading text-2xl">The law says you must be 25. You can’t apply yet.</h2>
        <p className="mt-3 leading-relaxed">
          You can still ask us to remind you when you are old enough to look at the rules again.
        </p>
        <Link className={`${btn} mt-5`} href="/reminders">
          Get reminders
        </Link>
      </>
    );
  }

  if (id === "already") {
    return (
      <>
        <h2 className="font-heading text-2xl">You already hold an FUL. Look at renewals.</h2>
        <p className="mt-3 leading-relaxed">
          Licences issued after 31 May 2004 run for 3 years. If yours was issued before that, a March
          2025 High Court ruling said those licences had not expired. Talk to an attorney about that
          ruling. The yearly fee still applies.
        </p>
        <Link className={`${btn} mt-5`} href="/renewals">
          Go to renewals
        </Link>
      </>
    );
  }

  if (id === "restricted") {
    return (
      <>
        <h2 className="font-heading text-2xl">
          You’d need the President’s permission. Please talk to an attorney.
        </h2>
        <p className="mt-3 leading-relaxed">
          A restricted person needs permission from the President before a licence can be considered.
          We are not attorneys. We can refer you. Our partner attorney’s name is still to be confirmed.
        </p>
        <Link className={`${btnSecondary} mt-5`} href="/book?service=consultation">
          Book a consultation
        </Link>
      </>
    );
  }

  if (id === "dv") {
    return (
      <>
        <h2 className="font-heading text-2xl">
          The Commissioner may refuse for 5 years. Talk to an attorney first.
        </h2>
        <p className="mt-3 leading-relaxed">
          A Domestic Violence Act conviction does not let us decide anything. The Commissioner
          decides. Please get legal advice before you spend money on a file.
        </p>
        <Link className={`${btnSecondary} mt-5`} href="/book?service=consultation">
          Book a consultation
        </Link>
      </>
    );
  }

  if (id === "reason") {
    return (
      <>
        <h2 className="font-heading text-2xl">We can help you gather proof.</h2>
        <p className="mt-3 leading-relaxed">
          A good reason is part of an application. Bring the facts you already have. We will help you
          put them in order. We do not invent a reason for you.
        </p>
        <Link className={`${btn} mt-5`} href="/book?service=consultation">
          Book a consultation
        </Link>
      </>
    );
  }

  if (id === "docs") {
    return (
      <>
        <h2 className="font-heading text-2xl">You will need ID and a Certificate of Character.</h2>
        <p className="mt-3 leading-relaxed">
          A valid ID and a Certificate of Character not older than 3 months are part of the file. We
          can help you plan those steps. This check is not a decision.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link className={btn} href="/ful-requirements">
            See the checklist
          </Link>
          <Link className={btnSecondary} href="/book?service=consultation">
            Book a consultation
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className="font-heading text-2xl">You look ready to start.</h2>
      <p className="mt-3 leading-relaxed">
        This is a guide, not a decision. Only the Commissioner of Police decides. Stage 1 is a
        provisional licence. These are the papers for that step:
      </p>
      <ul className="mt-4 list-disc space-y-1 pl-5">
        {stage1Items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Link className={btn} href="/book?service=first-application">
          Book a first-application consultation
        </Link>
        <Link className={btnSecondary} href="/ful-requirements">
          Full checklist
        </Link>
      </div>
    </>
  );
}
