import Link from "next/link";
import { buildMetadata, CITY } from "../lib/seo";
import { services } from "../lib/services";

export const metadata = buildMetadata({
  title: `Servicii stomatologice in ${CITY} | MatDent Clinique`,
  description:
    "Descopera serviciile MatDent Clinique: albire dentara, implanturi dentare si aparat dentar in Craiova.",
  path: "/servicii",
  keywords: [
    "servicii stomatologice Craiova",
    "clinica dentara in Craiova",
    "implanturi dentare Craiova",
    "albire dentara Craiova",
  ],
});

export default function ServiciiPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold text-stone-800">
        Servicii stomatologice in Craiova
      </h1>
      <p className="mt-4 text-stone-700">
        Daca esti in cautarea unei clinici dentare in Craiova, serviciile noastre
        acopera tratamente functionale si estetice pentru toate varstele.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {services.map((service) => (
          <article key={service.slug} className="rounded-xl border border-stone-200 p-5">
            <h2 className="text-xl font-semibold text-stone-800">{service.title}</h2>
            <p className="mt-2 text-stone-600">{service.shortDescription}</p>
            <Link href={`/servicii/${service.slug}`} className="mt-4 inline-block text-[#D6B975] hover:underline">
              Vezi detalii
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
