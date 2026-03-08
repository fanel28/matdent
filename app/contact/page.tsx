import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact | MatDent Clinique",
  description: "Programează o consultație la MatDent Clinique Craiova. Formular de contact și date.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="mb-8 text-3xl font-semibold text-stone-800">Contact</h1>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-medium text-stone-800">Date contact</h2>
          <ul className="space-y-3 text-stone-700">
            <li>
              <span className="font-medium">Locație:</span> Str. Mihai Viteazul, nr. 3, bl. 5, Craiova
            </li>
            <li>
              <span className="font-medium">Telefon:</span>{" "}
              <a href="tel:0731188600" className="text-[#D6B975] hover:underline">
                0731 188 600
              </a>
            </li>
            <li>
              <span className="font-medium">E-mail:</span>{" "}
              <a href="mailto:matdentclinique@gmail.com" className="text-[#D6B975] hover:underline">
                matdentclinique@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
