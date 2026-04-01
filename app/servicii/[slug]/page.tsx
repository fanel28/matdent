import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/seo/JsonLd";
import LocationSeoSection from "../../components/seo/LocationSeoSection";
import { buildFaqSchema } from "../../lib/schemas";
import { buildMetadata, CITY } from "../../lib/seo";
import { getServiceBySlug, services } from "../../lib/services";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return buildMetadata({
      title: "Serviciu stomatologic | MatDent Clinique",
      description: "Serviciu stomatologic MatDent Clinique.",
      path: "/servicii",
    });
  }

  return buildMetadata({
    title: `${service.title} in ${CITY} | MatDent Clinique`,
    description: `${service.title} la MatDent Clinique, clinica dentara in ${CITY}. Programeaza o consultatie personalizata.`,
    path: `/servicii/${service.slug}`,
    keywords: [
      `${service.title} ${CITY}`,
      `dentist in ${CITY}`,
      `clinica dentara in ${CITY}`,
    ],
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <JsonLd data={buildFaqSchema(service.faq)} />
      <article>
        <h1 className="text-3xl font-semibold text-stone-800">{service.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-stone-700">
          {service.description}
        </p>
      </article>

      <LocationSeoSection
        serviceName={service.title}
        city={CITY}
        description={service.shortDescription}
      />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-stone-800">
          Intrebari frecvente despre {service.title.toLowerCase()}
        </h2>
        <div className="mt-4 space-y-4">
          {service.faq.map((item) => (
            <article key={item.q} className="rounded-xl border border-stone-200 p-5">
              <h3 className="text-lg font-semibold text-stone-800">{item.q}</h3>
              <p className="mt-2 text-stone-600">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <nav className="mt-10 rounded-xl border border-stone-200 p-5">
        <h2 className="text-xl font-semibold text-stone-800">Navigare utila</h2>
        <div className="mt-3 flex flex-wrap gap-4 text-[#D6B975]">
          <Link href="/servicii">Toate serviciile</Link>
          <Link href="/expertiza">Expertiza noastra</Link>
          <Link href="/contact">Contact si programari</Link>
        </div>
      </nav>
    </div>
  );
}
