import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata, CITY } from "../../lib/seo";

const disciplines: Record<
  string,
  { title: string; description: string }
> = {
  implantologie: {
    title: "Implantologie",
    description:
      "La MatDent Clinique din Craiova, implantologia dentară oferă soluții moderne pentru înlocuirea dinților lipsă prin implant dentar. Folosim materiale de înaltă calitate și tehnologii moderne pentru a reda funcționalitatea danturii și estetica naturală a zâmbetului. Implantul dentar este o soluție durabilă și sigură pentru restaurarea completă a zâmbetului.",
  },
  protetica: {
    title: "Protetică dentară",
    description:
      "La MatDent Clinique Craiova, serviciile de protetică dentară sunt dedicate restaurării dinților afectați sau lipsă prin coroane dentare, punți sau proteze. Scopul tratamentelor protetice este refacerea funcției masticatorii și obținerea unui zâmbet natural și armonios.",
  },
  endodontie: {
    title: "Endodonție",
    description:
      "În cadrul MatDent Clinique Craiova, tratamentele de endodonție sunt realizate cu aparatură modernă pentru tratarea infecțiilor dentare și efectuarea tratamentelor de canal. Scopul este salvarea dinților naturali și prevenirea complicațiilor dentare.",
  },
  ortodontie: {
    title: "Ortodonție",
    description:
      "Ortodonția la MatDent Clinique Craiova se ocupă cu corectarea poziției dinților și a mușcăturii prin aparate dentare moderne. Tratamentul ortodontic contribuie la obținerea unui zâmbet sănătos, estetic și corect aliniat.",
  },
  parodontologie: {
    title: "Parodontologie",
    description:
      "La MatDent Clinique din Craiova, tratamentele de parodontologie sunt dedicate sănătății gingiilor și țesuturilor care susțin dinții. Diagnosticăm și tratăm afecțiuni precum gingivita și parodontoza, pentru a preveni pierderea dinților și a menține sănătatea orală.",
  },
  chirurgie: {
    title: "Chirurgie dentară",
    description:
      "Serviciile de chirurgie dentară oferite de MatDent Clinique Craiova includ extracții dentare, extracția molarilor de minte și alte intervenții chirurgicale orale. Procedurile sunt realizate cu grijă și tehnici moderne pentru confortul și siguranța pacienților.",
  },
  estetica: {
    title: "Estetică dentară",
    description:
      "La MatDent Clinique Craiova, estetica dentară are ca scop îmbunătățirea aspectului zâmbetului prin proceduri precum albire dentară, fațete dentare sau alte tratamente estetice. Rezultatul este un zâmbet luminos, natural și armonios.",
  },
  pedodontie: {
    title: "Pedodonție",
    description:
      "Pedodonția la MatDent Clinique Craiova oferă servicii stomatologice dedicate copiilor. Tratamentele sunt adaptate nevoilor celor mici și realizate într-un mediu prietenos, pentru a crea o experiență pozitivă la dentist.",
  },
};

export async function generateStaticParams() {
  return Object.keys(disciplines).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const discipline = disciplines[slug];

  if (!discipline) {
    return buildMetadata({
      title: "Serviciu stomatologic | MatDent Clinique",
      description: "Detalii despre serviciile stomatologice MatDent Clinique.",
      path: "/expertiza",
    });
  }

  return buildMetadata({
    title: `${discipline.title} in ${CITY} | MatDent Clinique`,
    description: `${discipline.title} la MatDent Clinique, clinica dentara in ${CITY}.`,
    path: `/expertiza/${slug}`,
    keywords: [`${discipline.title} ${CITY}`, `dentist in ${CITY}`, `clinica dentara in ${CITY}`],
  });
}

export default async function DisciplinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const discipline = disciplines[slug];

  if (!discipline) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="mb-4 text-center text-3xl font-semibold text-stone-800">
        {discipline.title}
      </h1>
      <p className="text-lg leading-relaxed text-stone-700">
        {discipline.description}
      </p>
      <h2 className="mt-8 text-2xl font-semibold text-stone-800">
        De ce sa alegi {discipline.title.toLowerCase()} la MatDent?
      </h2>
      <p className="mt-3 text-stone-700">
        Oferim evaluare corecta, plan de tratament personalizat si monitorizare pe
        termen lung pentru rezultate stabile.
      </p>
      <div className="mt-10 text-center">
        <Link
          href="/expertiza"
          className="inline-block text-[#D6B975] hover:underline"
        >
          ← Înapoi la Expertiză
        </Link>
      </div>
    </div>
  );
}
