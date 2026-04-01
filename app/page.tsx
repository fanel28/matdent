import Link from "next/link";
import Image from "next/image";
import Carousel from "./components/Carousel";

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
  const heroImage = HOMEPAGE_IMAGES[2]; // alegem una pentru hero

  return (
    <div>
      {/* Secțiune intro + carousel */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"> 
        <div className="mb-10 text-center">
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-700">
            La <strong className="text-[#D6B975]">MatDent Clinique</strong>, credem că stomatologia înseamnă mai mult decât tehnologie și proceduri – înseamnă grijă, respect și atenție autentică față de fiecare pacient. Clinica noastră, nou deschisă în Craiova, a fost creată ca un spațiu modern și elegant, în care confortul și siguranța pacientului sunt prioritare.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-stone-700">
            Ne dedicăm timp pentru a înțelege nevoile fiecărei persoane și pentru a oferi o experiență calmă, clară și lipsită de stres. Prin profesionalism, empatie și comunicare deschisă, construim relații bazate pe încredere, pentru zâmbete sănătoase pe termen lung.
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
            alt="MatDent"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1024px"
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
    </div>
  );
}
