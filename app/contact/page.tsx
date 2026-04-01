import ContactForm from "./ContactForm";
import { buildMetadata, CITY, CLINIC_NAME, PHONE_DISPLAY } from "../lib/seo";

export const metadata = buildMetadata({
  title: `Contact ${CLINIC_NAME} | Dentist in ${CITY}`,
  description:
    "Contacteaza MatDent Clinique pentru programari si consultatii. Clinica dentara in Craiova cu adresa, telefon si formular online.",
  path: "/contact",
  keywords: ["contact dentist Craiova", "clinica dentara in Craiova", "programare dentist Craiova"],
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="mb-8 text-3xl font-semibold text-stone-800">Contact si programari</h1>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-medium text-stone-800">Date contact (NAP)</h2>
          <ul className="space-y-3 text-stone-700">
            <li>
              <span className="font-medium">Locație:</span> Str. Mihai Viteazul, nr. 3, bl. 5, Craiova
            </li>
            <li>
              <span className="font-medium">Telefon:</span>{" "}
              <a href="tel:0731188600" className="text-[#D6B975] hover:underline">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <span className="font-medium">E-mail:</span>{" "}
              <a href="mailto:matdentclinique@gmail.com" className="text-[#D6B975] hover:underline">
                matdentclinique@gmail.com
              </a>
            </li>
          </ul>
          <h3 className="mb-3 mt-8 text-lg font-medium text-stone-800">Harta clinicii</h3>
          <iframe
            title="Google Maps - MatDent Clinique Craiova"
            src="https://www.google.com/maps?q=Str.%20Mihai%20Viteazul%2C%20nr.%203%2C%20Craiova&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full rounded-xl border border-stone-200"
          />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
