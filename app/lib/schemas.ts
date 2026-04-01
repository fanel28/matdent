import {
  ADDRESS,
  CITY,
  CLINIC_NAME,
  GEO,
  OPENING_HOURS,
  PHONE_E164,
  SITE_URL,
} from "./seo";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: CLINIC_NAME,
  url: SITE_URL,
  telephone: PHONE_E164,
  logo: `${SITE_URL}/logo.jpeg`,
  sameAs: [
    "https://web.facebook.com/profile.php?id=61586047113551",
    "https://www.instagram.com/matdentclinique/",
    "https://www.tiktok.com/@matdent.clinique",
  ],
  address: {
    "@type": "PostalAddress",
    ...ADDRESS,
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${SITE_URL}/#dentist`,
  name: CLINIC_NAME,
  image: `${SITE_URL}/logo.jpeg`,
  url: SITE_URL,
  telephone: PHONE_E164,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    ...ADDRESS,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },
  openingHours: OPENING_HOURS,
  areaServed: CITY,
  medicalSpecialty: "Dentistry",
};

export function buildFaqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
