import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: "Politica de confidentialitate | MatDent Clinique",
  description: "Politica de confidentialitate si prelucrarea datelor personale la MatDent Clinique.",
  path: "/confidentialitate",
});

export default function ConfidentialitatePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="mb-8 text-3xl font-semibold text-stone-800">
        Politica de confidențialitate
      </h1>
      <div className="prose prose-stone max-w-none text-stone-700">
        <p>
          Această rubrică va conține în curând informațiile complete privind prelucrarea datelor personale,
          conform reglementărilor aplicabile (GDPR). Datele furnizate prin formularul de contact sunt utilizate
          exclusiv pentru programare și contact. Nu partajăm datele cu terți în scopuri de marketing.
        </p>
        <p className="mt-4">
          Pentru orice întrebări legate de confidențialitate, ne puteți contacta la{" "}
          <a href="mailto:matdentclinique@gmail.com" className="text-[#D6B975] hover:underline">
            matdentclinique@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
