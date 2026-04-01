import Link from "next/link";
import { buildMetadata, CITY } from "../lib/seo";

const disciplines = [
  { slug: "implantologie", title: "Implantologie" },
  { slug: "protetica", title: "Protetică dentară" },
  { slug: "endodontie", title: "Endodontie" },
  { slug: "ortodontie", title: "Ortodontie" },
  { slug: "parodontologie", title: "Parodontologie" },
  { slug: "chirurgie", title: "Chirurgie dentară" },
  { slug: "estetica", title: "Estetică dentară" },
  { slug: "pedodontie", title: "Pedodontie" },
];

export const metadata = buildMetadata({
  title: `Expertiza stomatologica in ${CITY} | MatDent Clinique`,
  description:
    "Descopera expertiza MatDent Clinique: implantologie, ortodontie, parodontologie, endodontie si estetica dentara in Craiova.",
  path: "/expertiza",
  keywords: ["dentist in Craiova", "specializari stomatologice Craiova", "clinica dentara in Craiova"],
});

export default function ExpertizaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="mb-4 text-3xl font-semibold text-stone-800">Expertiza noastră</h1>
      <p className="mb-10 text-stone-600">
        Oferim o gama larga de servicii stomatologice pentru pacientii care cauta
        un dentist in Craiova. Alege disciplina care te intereseaza pentru detalii.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {disciplines.map((d) => (
          <Link
            key={d.slug}
            href={`/expertiza/${d.slug}`}
            className="rounded-xl border border-[#D6B975]/40 bg-white p-6 text-center font-medium text-stone-800 shadow-sm transition hover:border-[#D6B975] hover:bg-[#D6B975]/5"
          >
            {d.title}
          </Link>
        ))}
      </div>
      <p className="mt-8 text-stone-700">
        Pentru servicii cu pagini dedicate, vezi si sectiunea{" "}
        <Link href="/servicii" className="text-[#D6B975] hover:underline">
          Servicii stomatologice
        </Link>
        .
      </p>
    </div>
  );
}
