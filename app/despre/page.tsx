import { buildMetadata, CITY, CLINIC_NAME } from "../lib/seo";

export const metadata = buildMetadata({
  title: `Despre ${CLINIC_NAME} | Clinica dentara in ${CITY}`,
  description:
    "Afla mai multe despre MatDent Clinique, echipa medicala, valorile clinicii si abordarea bazata pe incredere si transparenta.",
  path: "/despre",
  keywords: ["despre dentist Craiova", "clinica dentara in Craiova", "medic stomatolog Craiova"],
});

export default function DesprePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold text-stone-800">Despre MatDent Clinique</h1>
      <p className="mt-4 text-lg leading-relaxed text-stone-700">
        Suntem o clinica dentara in Craiova orientata spre tratamente sigure,
        comunicare clara si rezultate predictibile pentru fiecare pacient.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-stone-800">Semnale de incredere</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-stone-700">
          <li>Plan de tratament personalizat, explicat clar inainte de interventii.</li>
          <li>Protocol strict de sterilizare si igiena pentru siguranta pacientului.</li>
          <li>Echipamente moderne pentru diagnostic si tratamente minim invazive.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-stone-800">Medici si acreditari</h2>
        <p className="mt-3 text-stone-700">
          Echipa noastra include medici stomatologi cu formare continua in
          implantologie, estetica dentara si ortodontie. Participam constant la
          cursuri si congrese pentru a integra tehnici actuale in practica zilnica.
        </p>
      </section>
    </div>
  );
}
