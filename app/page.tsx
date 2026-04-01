import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { buildMetadata, CITY } from "./lib/seo";

const Carousel = dynamic(() => import("./components/Carousel"), {
  loading: () => (
    <div className="h-[320px] w-full animate-pulse rounded-2xl bg-stone-100 sm:h-[400px] md:h-[480px]" />
  ),
});

export const metadata = buildMetadata({
  title: `Dentist in ${CITY} | MatDent Clinique`,
  description:
    "Cauti un dentist in Craiova? MatDent Clinique este clinica dentara in Craiova cu servicii moderne, medici dedicati si tratamente personalizate.",
  path: "/",
  keywords: [
    "dentist in Craiova",
    "dental clinic in Craiova",
    "clinica dentara Craiova",
    "consult stomatologic Craiova",
  ],
});

const HOMEPAGE_IMAGES = [
  "/homepage/WhatsApp Image 2026-03-09 at 16.00.02.jpeg",
  "/homepage/WhatsApp Image 2026-03-09 at 16.00.02 (1).jpeg",
  "/homepage/WhatsApp Image 2026-03-09 at 16.00.02 (2).jpeg",
  "/homepage/WhatsApp Image 2026-03-09 at 16.00.02 (3).jpeg",
  "/homepage/WhatsApp Image 2026-03-09 at 16.00.02 (5).jpeg",
  "/homepage/WhatsApp Image 2026-03-09 at 16.00.02 (6).jpeg",
  "/homepage/WhatsApp Image 2026-03-10 at 13.54.48.jpeg", 
];

export default function Home() {
  const heroImage = HOMEPAGE_IMAGES[2];

  return (
    <div>
      {/* Secțiune intro + carousel */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-semibold text-stone-800 sm:text-5xl">
            Clinica dentara in Craiova pentru zambete sanatoase
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-700">
            La <strong className="text-[#D6B975]">MatDent Clinique</strong>, credem
            ca stomatologia inseamna mai mult decat proceduri. Oferim servicii
            complete pentru pacientii care cauta un dentist in Craiova intr-un
            spatiu modern, sigur si prietenos.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-stone-700">
            Ne dedicam timp pentru a intelege nevoile fiecarui pacient si pentru
            a oferi o experienta calma, clara si fara stres.
          </p>
        </div>

        <Carousel />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-[#D6B975] px-6 py-3 font-medium text-stone-900 shadow-md transition hover:bg-[#c4a864]"
          >
            Programează o consultație
          </Link>
          <Link
            href="/expertiza"
            className="rounded-full border-2 border-[#D6B975] px-6 py-3 font-medium text-stone-800 transition hover:bg-[#D6B975]/10"
          >
            Vezi expertiza noastră
          </Link>
        </div>
      </section>

      {/* Hero cu poză mare și citat */}
      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="relative h-[420px] overflow-hidden rounded-2xl sm:h-[500px]">
          <Image
            src={heroImage}
            alt="Cabinet modern MatDent Clinique din Craiova"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1024px"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/60 flex flex-col items-center justify-center px-6 text-center text-white">
            <blockquote className="text-2xl font-medium sm:text-3xl md:text-4xl">
              „Un zâmbet frumos începe cu o vizită la dentist!”
            </blockquote>
            <p className="mt-4 max-w-xl text-lg text-stone-200">
              Fie că este vorba despre prevenție, estetică sau tratamente complexe, suntem alături de tine la fiecare pas.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="text-3xl font-semibold text-stone-800">Servicii populare</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Link href="/servicii/albire-dentara" className="rounded-xl border border-stone-200 p-5 hover:border-[#D6B975]">
            <h3 className="text-xl font-semibold text-stone-800">Albire dentara</h3>
            <p className="mt-2 text-stone-600">Reda luminozitatea zambetului prin tratamente profesionale sigure.</p>
          </Link>
          <Link href="/servicii/implanturi-dentare" className="rounded-xl border border-stone-200 p-5 hover:border-[#D6B975]">
            <h3 className="text-xl font-semibold text-stone-800">Implanturi dentare</h3>
            <p className="mt-2 text-stone-600">Solutii durabile pentru inlocuirea dintilor lipsa si functionalitate completa.</p>
          </Link>
          <Link href="/servicii/aparat-dentar" className="rounded-xl border border-stone-200 p-5 hover:border-[#D6B975]">
            <h3 className="text-xl font-semibold text-stone-800">Aparat dentar</h3>
            <p className="mt-2 text-stone-600">Corectarea alinierii dintilor pentru sanatate si estetica pe termen lung.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
