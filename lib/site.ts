export const site = {
  name: "F.A.L.L. Training Institute",
  legalName: "Firearms Locked And Loaded Training Institute",
  email: "Fallfirearmstt@gmail.com",
  phones: [
    { label: "788-FALL (3255)", href: "tel:+18687883255" },
    { label: "766-5078", href: "tel:+18687665078" },
  ],
  // TODO: replace with the confirmed WhatsApp number. Digits only, country code included.
  whatsappNumber: "1868XXXXXXXX",
  whatsappPrefill: "Hi FALL, I’d like to book a consultation.",
  address: "TBD",
  hours: "TBD",
  lastChecked: "November 2026",
} as const;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function whatsappHref(text: string = site.whatsappPrefill) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const nav = [
  { href: "/training", label: "Training" },
  { href: "/renewals", label: "Renewals" },
  { href: "/services", label: "Services" },
  { href: "/ful-requirements", label: "Requirements" },
  { href: "/fees", label: "Fees" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;

export const disclaimer =
  "F.A.L.L. – Firearms Locked And Loaded Training Institute is a private training and document-preparation business. We are not part of, or approved by, the Trinidad and Tobago Police Service. Only the Commissioner of Police can grant, renew, vary or revoke a Firearm User’s Licence. We cannot speed up, influence or guarantee any decision, and we will never ask for money to do so. We are not attorneys and do not give legal advice; we refer you to an attorney-at-law when you need one. Information here is general, based on the Firearms Act and TTPS notices as of November 2026, and may change. We do not sell firearms or ammunition.";

export const disclaimerLine =
  "F.A.L.L. – Firearms Locked And Loaded Training Institute is a private training and document-preparation business. We are not part of, or approved by, the Trinidad and Tobago Police Service.";

export const officialLinks = {
  ttpsLicences: "https://www.ttps.gov.tt/services/licences/",
  ttpsHome: "https://www.ttps.gov.tt/",
  certificateOfCharacter: "https://www.ttps.gov.tt/services/certificates/",
  certificateOfCharacterApply: "https://services.ttps.gov.tt/coc/",
  governmentPrintery: "https://www.moc.gov.tt/government-printery/",
  gazette: "https://printery.gov.tt/e-gazette/",
} as const;

export const bookingServices = [
  { value: "consultation", label: "Consultation" },
  { value: "first-application", label: "First FUL application" },
  { value: "renewal", label: "FUL renewal" },
  { value: "training", label: "Training class" },
  { value: "business", label: "Business enquiry" },
  { value: "estate", label: "Family or estate" },
  { value: "other", label: "Change, travel, or other permit" },
] as const;

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    alternateName: site.legalName,
    description:
      "Private firearms training and Firearm User’s Licence document help in Trinidad and Tobago. Only the Commissioner of Police grants a licence.",
    url: siteUrl,
    email: site.email,
    telephone: ["+1-868-788-3255", "+1-868-766-5078"],
    image: `${siteUrl}/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "TT",
    },
    areaServed: {
      "@type": "Country",
      name: "Trinidad and Tobago",
    },
  };
}
