import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export default function FAQ() {
  return (
    <section id="faq" className="bg-light py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl font-bold uppercase text-navy sm:text-5xl">Common Questions</h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-slate-200 bg-white shadow-sm open:border-gold">
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-gold-deep transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="px-5 pb-5 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-slate-600">
          Still have a question?{" "}
          <a href={site.phone.tel} className="font-bold text-navy underline decoration-gold decoration-2 underline-offset-4">
            Call {site.phone.display}
          </a>
        </p>
      </div>
    </section>
  );
}
