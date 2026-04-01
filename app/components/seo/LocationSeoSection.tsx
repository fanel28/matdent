import Link from "next/link";

type LocationSeoSectionProps = {
  serviceName: string;
  city: string;
  description: string;
  contactPath?: string;
};

export default function LocationSeoSection({
  serviceName,
  city,
  description,
  contactPath = "/contact",
}: LocationSeoSectionProps) {
  return (
    <section className="mt-10 rounded-2xl border border-[#D6B975]/40 bg-[#D6B975]/10 p-6">
      <h2 className="text-2xl font-semibold text-stone-800">
        {serviceName} la clinica dentara din {city}
      </h2>
      <p className="mt-3 text-stone-700">{description}</p>
      <p className="mt-4 text-stone-700">
        Daca cauti un dentist in {city} sau o clinica dentara in {city}, echipa
        noastra iti poate oferi un plan personalizat.
      </p>
      <Link
        href={contactPath}
        className="mt-5 inline-block rounded-full bg-[#D6B975] px-5 py-2.5 font-medium text-stone-900 transition hover:bg-[#c4a864]"
      >
        Programeaza o consultatie
      </Link>
    </section>
  );
}
