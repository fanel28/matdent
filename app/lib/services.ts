export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  faq: Array<{ q: string; a: string }>;
};

export const services: Service[] = [
  {
    slug: "albire-dentara",
    title: "Albire dentara profesionala",
    shortDescription: "Tratamente de albire dentara sigure si eficiente.",
    description:
      "Serviciul de albire dentara profesionala la MatDent Clinique ofera rezultate vizibile si sigure, cu protectia smaltului. Procedura este potrivita pacientilor care isi doresc un zambet mai luminos in cadrul unei clinici dentare din Craiova.",
    faq: [
      {
        q: "Cat timp rezista albirea dentara?",
        a: "Rezultatele pot dura intre 6 si 24 de luni, in functie de obiceiurile alimentare si igiena orala.",
      },
      {
        q: "Albirea dentara afecteaza smaltul?",
        a: "Nu, atunci cand procedura este realizata de medic dentist si este respectat protocolul corect.",
      },
    ],
  },
  {
    slug: "implanturi-dentare",
    title: "Implanturi dentare",
    shortDescription: "Solutii moderne pentru inlocuirea dintilor lipsa.",
    description:
      "Implanturile dentare sunt o solutie durabila pentru pacientii care au pierdut unul sau mai multi dinti. Echipa MatDent Clinique foloseste planificare precisa si materiale premium pentru stabilitate, functionalitate si aspect natural.",
    faq: [
      {
        q: "Cat dureaza tratamentul cu implant dentar?",
        a: "Durata depinde de complexitatea cazului, de obicei intre cateva luni si pana la finalizarea lucrarii protetice.",
      },
      {
        q: "Implantul dentar este dureros?",
        a: "Interventia se realizeaza cu anestezie locala, iar disconfortul post-operator este controlabil cu recomandari medicale.",
      },
    ],
  },
  {
    slug: "aparat-dentar",
    title: "Aparat dentar",
    shortDescription: "Corectarea muscaturii si alinierii dintilor.",
    description:
      "Tratamentul ortodontic cu aparat dentar ajuta la corectarea pozitiei dintilor si la imbunatatirea functiei masticatorii. In clinica noastra din Craiova, planul ortodontic este personalizat pentru copii, adolescenti si adulti.",
    faq: [
      {
        q: "La ce varsta se poate pune aparat dentar?",
        a: "Tratamentul poate incepe de la varste mici, dar exista optiuni eficiente si pentru adulti.",
      },
      {
        q: "Cat dureaza tratamentul ortodontic?",
        a: "In general intre 12 si 24 de luni, in functie de complexitatea cazului.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
