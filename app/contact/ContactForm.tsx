"use client";

import { useState } from "react";
import Link from "next/link";
import { PHONE_DISPLAY } from "../lib/seo";

const formAction = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "https://formspree.io/f/mykngpgo";

export default function ContactForm() {
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeCorrect, setAgreeCorrect] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const canSubmit = agreePrivacy && agreeCorrect;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    setLoading(true);
    try {
      const res = await fetch(formAction, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-2xl px-4 py-8">
      <h2 className="mb-2 text-2xl font-semibold text-stone-800">Programează o consultație</h2>
      <p className="mb-6 text-stone-600">
        Completează formularul, iar echipa noastră te va contacta rapid pentru confirmarea vizitei.
        <br />
        <span className="font-medium">Pentru urgențe, sună direct la </span>
        <a href="tel:0731188600" className="text-[#D6B975] hover:underline">{PHONE_DISPLAY}</a>.
      </p>

      {submitted ? (
        <div className="rounded-xl bg-[#D6B975]/20 p-6 text-center text-stone-800">
          <p className="font-medium">Mesajul tău a fost trimis.</p>
          <p className="mt-2 text-sm">Te vom contacta în curând.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input type="text" name="_subject" value="Programare MatDent" readOnly className="hidden" />
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-stone-700">
              Nume și prenume pacient *
            </label>
            <input
              id="name"
              name="nume_si_prenume"
              type="text"
              required
              className="w-full rounded-lg border border-stone-300 px-4 py-2 focus:border-[#D6B975] focus:outline-none focus:ring-1 focus:ring-[#D6B975]"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-stone-700">
              Număr de telefon *
            </label>
            <input
              id="phone"
              name="telefon"
              type="tel"
              required
              className="w-full rounded-lg border border-stone-300 px-4 py-2 focus:border-[#D6B975] focus:outline-none focus:ring-1 focus:ring-[#D6B975]"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-stone-700">
              Adresa de e-mail *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-stone-300 px-4 py-2 focus:border-[#D6B975] focus:outline-none focus:ring-1 focus:ring-[#D6B975]"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-stone-700">
              Mesaj
            </label>
            <textarea
              id="message"
              name="mesaj"
              rows={4}
              className="w-full rounded-lg border border-stone-300 px-4 py-2 focus:border-[#D6B975] focus:outline-none focus:ring-1 focus:ring-[#D6B975]"
            />
          </div>

          <div className="space-y-3 rounded-lg border border-stone-200 bg-stone-50 p-4">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={agreePrivacy}
                onChange={(e) => setAgreePrivacy(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-stone-300 text-[#D6B975] focus:ring-[#D6B975]"
              />
              <span className="text-sm text-stone-700">
                Prin completarea și trimiterea formularului, sunt de acord ca datele mele personale (nume, telefon, e-mail) să fie prelucrate de către clinică exclusiv în scopul programării și contactării mele, conform{" "}
                <Link href="/confidentialitate" className="text-[#D6B975] underline hover:no-underline">
                  Politicii de confidențialitate
                </Link>
                .
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={agreeCorrect}
                onChange={(e) => setAgreeCorrect(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-stone-300 text-[#D6B975] focus:ring-[#D6B975]"
              />
              <span className="text-sm text-stone-700">
                Confirm că datele furnizate sunt corecte și complete.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={!canSubmit || loading}
            className="w-full rounded-full bg-[#D6B975] py-3 font-medium text-stone-900 transition hover:bg-[#c4a864] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Se trimite..." : "Trimite"}
          </button>
        </form>
      )}
    </section>
  );
}
