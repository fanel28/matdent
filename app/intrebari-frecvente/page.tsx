"use client";

import { useState } from "react";
import JsonLd from "../components/seo/JsonLd";
import { buildFaqSchema } from "../lib/schemas";
import { faqs } from "../lib/faqs";

export default function IntrebariFrecventePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd data={buildFaqSchema(faqs)} />
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
