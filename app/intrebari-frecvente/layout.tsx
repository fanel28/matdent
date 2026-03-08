import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Întrebări frecvente | MatDent Clinique",
  description: "Răspunsuri la întrebări frecvente despre programări, tratamente și servicii la MatDent Craiova.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
