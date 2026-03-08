"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Cum pot face o programare?",
    a: "Programările se pot face telefonic la numărul 0731188600, prin e-mail la adresa matdentclinique@gmail.com, prin formularul de pe site sau direct la recepția clinicii. Echipa noastră vă va confirma în cel mai scurt timp disponibilitatea și detaliile vizitei.",
  },
  {
    q: "Este necesară programarea în avans?",
    a: "Da, lucrăm pe bază de programare pentru a reduce timpul de așteptare și pentru a acorda fiecărui pacient timpul necesar. În caz de urgență, încercăm să oferim consultații în aceeași zi.",
  },
  {
    q: "Ce fac în caz de urgență stomatologică?",
    a: "Dacă aveți durere intensă, inflamație sau un dinte fracturat, vă rugăm să ne contactați imediat. Vom face tot posibilul să vă programăm cât mai rapid pentru a remedia problema.",
  },
  {
    q: "Este dureroasă o extracție dentară?",
    a: "Procedurile sunt realizate sub anestezie locală, astfel încât disconfortul este minim. După intervenție, este posibil să apară o ușoară sensibilitate, care poate fi gestionată cu medicația recomandată de medic.",
  },
  {
    q: "Cât durează un tratament de canal?",
    a: "Durata depinde de complexitatea cazului, însă în majoritatea situațiilor tratamentul poate fi finalizat în una sau două ședințe.",
  },
  {
    q: "Ce presupune un implant dentar?",
    a: "Implantul dentar este o soluție modernă pentru înlocuirea unui dinte lipsă. Procedura implică inserarea unui implant din titan în os, care va susține ulterior o coroană dentară. Medicul vă va explica fiecare etapă a tratamentului.",
  },
  {
    q: "Cât rezistă o coroană dentară?",
    a: "Cu o igienă orală corectă și controale regulate, o coroană dentară poate rezista între 10 și 15 ani sau chiar mai mult.",
  },
  {
    q: "De la ce vârstă poate veni un copil la stomatolog?",
    a: "Prima vizită este recomandată în jurul vârstei de 1 an sau la apariția primilor dinți. Vizitele regulate ajută la prevenirea problemelor dentare.",
  },
  {
    q: "Cât de des ar trebui să merg la control?",
    a: "Recomandăm un control stomatologic la fiecare 6 luni pentru prevenție și depistarea timpurie a eventualelor probleme.",
  },
  {
    q: "Cum sunt sterilizate instrumentele?",
    a: "Respectăm protocoale stricte de igienă și sterilizare, folosind echipamente moderne pentru siguranța fiecărui pacient.",
  },
  {
    q: "Cum se stabilește costul tratamentului?",
    a: "Costul este stabilit în urma unei consultații și a unui plan de tratament personalizat. Veți primi toate informațiile privind etapele și investiția necesară înainte de începerea procedurilor.",
  },
];

export default function IntrebariFrecventePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="mb-8 text-3xl font-semibold text-stone-800">Întrebări frecvente</h1>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-xl border border-stone-200 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-stone-800"
            >
              <span>{faq.q}</span>
              <span className="text-[#D6B975]">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            {openIndex === i && (
              <div className="border-t border-stone-100 px-5 py-4 text-stone-600">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
