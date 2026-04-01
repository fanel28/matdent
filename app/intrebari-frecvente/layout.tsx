import type { Metadata } from "next";
import { buildMetadata, CITY } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `Intrebari frecvente dentist in ${CITY} | MatDent Clinique`,
  description:
    "Raspunsuri utile despre programari, tratamente si costuri la clinica dentara MatDent din Craiova.",
  path: "/intrebari-frecvente",
  keywords: ["FAQ dentist Craiova", "clinica dentara in Craiova", "intrebari stomatologie"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
