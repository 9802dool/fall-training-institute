export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: "faster",
    question: "Can you get my licence approved faster?",
    answer:
      "No. Only the TTPS and the Commissioner of Police decide, and nobody can speed that up. We make sure your file is complete so it isn’t sent back.",
  },
  {
    id: "ttps",
    question: "Do you work for the TTPS?",
    answer:
      "No. We are a private training institute. We are not linked to or approved by the TTPS.",
  },
  {
    id: "how-long",
    question: "How long does it take?",
    answer:
      "The TTPS decides the time. The Commissioner has said some files take about 7 months, others longer.",
  },
  {
    id: "age",
    question: "How old must I be?",
    answer: "25 or older. That’s the law.",
  },
  {
    id: "provisional",
    question: "What is a provisional licence?",
    answer:
      "Your first step. It lasts 2 months and lets you train only at the range named on it, with an FUL holder supervising.",
  },
  {
    id: "competence",
    question: "Who signs my certificate of competence?",
    answer:
      "A licensed firearms instructor. Ours are [names TBD].",
  },
  {
    id: "renew",
    question: "Do I renew every 3 years?",
    answer:
      "Yes if your licence was issued after 31 May 2004. If it’s older, a 2025 court ruling may apply; ask an attorney. Everyone pays the yearly fee.",
  },
  {
    id: "fees",
    question: "How much are the official fees in 2026?",
    answer:
      "FUL TT$600 a year (shotgun TT$480) and TT$1,000 to renew. See our Fees page.",
  },
  {
    id: "sell",
    question: "Do you sell firearms or ammunition?",
    answer: "No.",
  },
  {
    id: "id",
    question: "Is my ID safe with you?",
    answer:
      "Yes. Only named staff can see it, and we delete copies after your file closes. See our Privacy page. For now, bring originals in person. We do not take uploads online.",
  },
  {
    id: "myself",
    question: "Can I do it myself without you?",
    answer:
      "Yes. Anyone can apply directly to the TTPS. We’re here if you want help, training or reminders.",
  },
  {
    id: "refused",
    question: "What if I’m refused?",
    answer:
      "You can appeal to the Firearms Appeal Board. We’ll put your file in order and refer you to an attorney.",
  },
];

export const faqTeasers = faqs.slice(0, 3);
