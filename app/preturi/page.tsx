const priceCategories = [
  {
    name: "Consultație",
    items: [
      {
        nr: 1,
        denumire:
          "Consultație stomatologică (evaluare completă a sănătății orale, anamneză, examinare a stării dentare, cu diagnostic și recomandări de tratament)",
        cost: "200 lei",
      },
    ],
  },
  {
    name: "Estetică dentară",
    items: [
      {
        nr: 2,
        denumire: "Fațetă dentară Emax (zâmbet natural, sigur și durabil)",
        cost: "2.100 lei",
      },
      {
        nr: 3,
        denumire: "Albire dentară profesională",
        cost: "1.200 lei",
      },
    ],
  },
  {
    name: "Implantologie",
    items: [
      {
        nr: 4,
        denumire:
          "Implant dentar Straumann (implanturi elvețiene de calitate premium, stabilitate, integrare sigură, rezultate durabile)",
        cost: "4.000 lei",
      },
      {
        nr: 5,
        denumire: "Implant dentar standard",
        cost: "3.000 lei",
      },
      {
        nr: 6,
        denumire: "Proteză fixă pe 4/6 implanturi (sistem All-on-4/6 + lucrare protetică provizorie)",
        cost: "20.000 lei",
      },
      {
        nr: 7,
        denumire: "Sinus lifting deschis",
        cost: "4.500 lei",
      },
      {
        nr: 8,
        denumire: "Sinus lifting închis",
        cost: "3.500 lei",
      },
    ],
  },
  {
    name: "Protetică dentară",
    items: [
      {
        nr: 9,
        denumire: "Coroană dentară realizată în cabinet",
        cost: "150 lei",
      },
      {
        nr: 10,
        denumire: "Coroană dentară standard din Zirconiu/ dinte",
        cost: "1.700 lei",
      },
      {
        nr: 11,
        denumire: "Coroană dentară premium din Zirconiu/ dinte",
        cost: "3.000 lei",
      },
      {
        nr: 12,
        denumire: "Lucrare de tip All on 4 din Zirconiu",
        cost: "20.000 lei",
      },
    ],
  },
  {
    name: "Profilaxie dentară",
    items: [
      {
        nr: 13,
        denumire: "Detartraj cu ultrasunete (detartraj profesional + air flow)",
        cost: "350 lei",
      },
    ],
  },
  {
    name: "Terapie Odontală",
    items: [
      {
        nr: 14,
        denumire: "Obturație compozit fotopolimerizabil simplă",
        cost: "300 lei",
      },
      {
        nr: 15,
        denumire: "Obturație compozit fotopolimerizabil complexă",
        cost: "350 lei",
      },
      {
        nr: 16,
        denumire: "Obturație de colet",
        cost: "250 lei",
      },
    ],
  },
  {
    name: "Endodonție",
    items: [
      {
        nr: 17,
        denumire:
          "Tratament de canal pe dinte monoradicular realizat cu microscop",
        cost: "700 lei",
      },
      {
        nr: 18,
        denumire:
          "Tratament de canal pe dinte pluriradicular realizat cu microscop",
        cost: "1.000 lei",
      },
      {
        nr: 19,
        denumire:
          "Retratament de canal pe dinte monoradicular realizat cu microscop",
        cost: "1.200 lei",
      },
      {
        nr: 20,
        denumire:
          "Retratament de canal pe dinte pluriradicular realizat cu microscop",
        cost: "1.300 lei",
      },
    ],
  },
  {
    name: "Chirurgie dentară",
    items: [
      {
        nr: 21,
        denumire: "Extracție molar de minte",
        cost: "500 lei",
      },
      {
        nr: 22,
        denumire: "Extracție dinte monoradicular",
        cost: "200 lei",
      },
      {
        nr: 23,
        denumire: "Extracție dinte pluriradicular",
        cost: "300 lei",
      },
    ],
  },
  {
    name: "Parodontologie",
    items: [
      {
        nr: 24,
        denumire: "Sterilizarea pungilor parodontale cu laser/dinte",
        cost: "100 lei",
      },
      {
        nr: 25,
        denumire: "Imobilizare dinți parodontotici/dinte",
        cost: "50 lei",
      },
      {
        nr: 26,
        denumire: "Chiuretaj gingival/dinte",
        cost: "100 lei",
      },
    ],
  },
];

export const metadata = {
  title: "Prețuri | MatDent Clinique",
  description:
    "Lista de prețuri pentru serviciile stomatologice MatDent Clinique Craiova.",
};

export default function PreturiPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-3xl font-semibold text-stone-800">
        Lista de prețuri
      </h1>
      <p className="mb-10 text-stone-600">
        Prețurile sunt orientative. Pentru un plan de tratament și ofertă personalizată, vă așteptăm la o consultație.
      </p>

      <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-sm">
        <table className="w-full min-w-[500px] border-collapse text-left">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50">
              <th className="w-14 px-4 py-3 text-sm font-semibold text-stone-700 sm:w-16">
                Nr
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-stone-700">
                Denumire
              </th>
              <th className="w-28 shrink-0 px-4 py-3 text-right text-sm font-semibold text-stone-700 sm:w-32">
                Cost
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {priceCategories.flatMap((category) => [
              <tr
                key={`cat-${category.name}`}
                className="bg-[#D6B975]/25 font-semibold text-stone-800"
              >
                <td colSpan={3} className="px-4 py-3">
                  {category.name}
                </td>
              </tr>,
              ...category.items.map((item) => (
                <tr
                  key={item.nr}
                  className="border-t border-stone-100 transition hover:bg-stone-50/80"
                >
                  <td className="w-14 px-4 py-3 text-sm text-stone-600 sm:w-16">
                    {item.nr}
                  </td>
                  <td className="px-4 py-3 text-stone-700">
                    {item.denumire}
                  </td>
                  <td className="w-28 shrink-0 px-4 py-3 text-right font-medium text-stone-800 sm:w-32">
                    {item.cost}
                  </td>
                </tr>
              )),
            ])}
          </tbody>
        </table>
      </div>

      <p className="mt-8 text-center text-sm text-stone-500">
        Pentru detalii și programări:{" "}
        <a href="tel:0731188600" className="text-[#D6B975] hover:underline">
          0731 188 600
        </a>{" "}
        sau{" "}
        <a
          href="/contact"
          className="text-[#D6B975] hover:underline"
        >
          formularul de contact
        </a>
        .
      </p>
    </div>
  );
}
