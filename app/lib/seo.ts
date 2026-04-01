import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://matdentclinique.com";
export const CLINIC_NAME = "MatDent Clinique";
export const CITY = "Craiova";
export const PHONE_DISPLAY = "0731 188 600";
export const PHONE_E164 = "+40731188600";
export const ADDRESS = {
  streetAddress: "Str. Mihai Viteazul, nr. 3, bl. 5",
  addressLocality: "Craiova",
  addressRegion: "Dolj",
  postalCode: "200000",
  addressCountry: "RO",
};
export const GEO = {
  latitude: 44.3302,
  longitude: 23.7949,
};
export const OPENING_HOURS = [
  "Mo-Fr 09:00-19:00",
  "Sa 09:00-14:00",
];

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: MetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    keywords,
    authors: [{ name: CLINIC_NAME }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "ro_RO",
      siteName: CLINIC_NAME,
      title,
      description,
      url,
      images: [
        {
          url: `${SITE_URL}/logo.jpeg`,
          width: 1200,
          height: 630,
          alt: `${CLINIC_NAME} - clinica dentara in ${CITY}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/logo.jpeg`],
    },
  };
}
