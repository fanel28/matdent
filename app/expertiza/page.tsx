import Link from "next/link";

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

export const metadata = {
  title: "Expertiză | MatDent Clinique",
  description: "Discipline stomatologice la MatDent: implantologie, protetică, endodontie și altele.",
};

export default function ExpertizaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="mb-4 text-3xl font-semibold text-stone-800">Expertiza noastră</h1>
      <p className="mb-10 text-stone-600">
        Oferim o gamă largă de servicii stomatologice. Alege disciplina care te interesează pentru mai multe detalii.
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
    </div>
  );
}
