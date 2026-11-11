export type FeeRow = {
  item: string;
  amount: string;
  detail?: string;
};

/** Official fees from Legal Notice 489 of 2025, in force from 1 January 2026. Do not add amounts that are not in that notice. */
export const officialFees: FeeRow[] = [
  {
    item: "Firearm User’s Licence, yearly, per firearm",
    amount: "TT$600",
  },
  { item: "Shotgun licence, yearly", amount: "TT$480" },
  { item: "Three-year renewal", amount: "TT$1,000" },
  { item: "Firearm User’s Employee Certificate (FUEC)", amount: "TT$320" },
  { item: "FUEC for a shotgun", amount: "TT$200" },
  { item: "Variation or an extra firearm", amount: "TT$40" },
  { item: "Duplicate licence", amount: "TT$80" },
  { item: "Travel permit", amount: "TT$20", detail: "Per firearm" },
  { item: "Pepper spray permit", amount: "TT$200" },
  { item: "Certificate of Character", amount: "TT$50" },
];

/** FALL prices are not set yet. Do not invent them. */
export const fallFees: FeeRow[] = [
  { item: "Consultation", amount: "TT$ TBD" },
  { item: "File preparation", amount: "TT$ TBD" },
  { item: "Help booking appointments", amount: "TT$ TBD" },
  { item: "Passport photos", amount: "TT$ TBD" },
  { item: "Good-reason evidence folder", amount: "TT$ TBD" },
  { item: "Interview preparation", amount: "TT$ TBD" },
  { item: "Provisional licence training", amount: "TT$ TBD" },
  { item: "Certificate of competence assessment", amount: "TT$ TBD" },
  { item: "Three-year recertification", amount: "TT$ TBD" },
  { item: "Safe handling and storage", amount: "TT$ TBD" },
  { item: "Renewal package", amount: "TT$ TBD" },
  { item: "Reminders", amount: "Free or TT$ TBD" },
  { item: "Attorney referral", amount: "TT$ TBD" },
];

export const providerFees: FeeRow[] = [
  {
    item: "Certificate of Character",
    amount: "TT$50",
    detail: "Paid to the TTPS",
  },
  {
    item: "Medical certificate",
    amount: "Provider’s price",
    detail: "Paid to the doctor",
  },
  {
    item: "Psychiatric evaluation",
    amount: "Provider’s price",
    detail: "Paid to the registered professional",
  },
  {
    item: "Passport photos",
    amount: "Provider’s price",
    detail: "Paid to the photographer, unless a FALL package price is published",
  },
];
