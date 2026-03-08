import Link from "next/link";
import { notFound } from "next/navigation";

const slugs: Record<string, string> = {
  implantologie: "Implantologie",
  protetica: "Protetică dentară",
  endodontie: "Endodontie",
  ortodontie: "Ortodontie",
  parodontologie: "Parodontologie",
  chirurgie: "Chirurgie dentară",
  estetica: "Estetică dentară",
  pedodontie: "Pedodontie",
};

export async function generateStaticParams() {
  return Object.keys(slugs).map((slug) => ({ slug }));
}

export default async function DisciplinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slugs[slug];
  if (!title) notFound();

  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="mb-4 text-3xl font-semibold text-stone-800">{title}</h1>
      <p className="text-stone-600">
        Conținutul acestei secțiuni va fi adăugat în curând.
      </p>
      <Link
        href="/expertiza"
        className="mt-8 inline-block text-[#D6B975] hover:underline"
      >
        ← Înapoi la Expertiză
      </Link>
    </div>
  );
}
