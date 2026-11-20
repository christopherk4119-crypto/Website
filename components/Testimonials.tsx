import { Quote } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

// No real reviews provided. Replace placeholders with real reviews word-for-word (first name + town).
// Do NOT add star ratings unless they come from a real review source.
const reviews = [
  { text: "[Customer review coming soon]", name: "", town: "" },
  { text: "[Customer review coming soon]", name: "", town: "" },
  { text: "[Customer review coming soon]", name: "", town: "" },
];

export default function Testimonials() {
  return (
    <section className="bg-light py-20 sm:py-24" aria-labelledby="reviews-h">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 id="reviews-h" className="font-display text-4xl font-bold uppercase text-navy sm:text-5xl">What Customers Say</h2>
          <p className="mt-4 text-lg text-slate-600">Moved with us? We&apos;d love to hear how it went.</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <Quote className="h-8 w-8 text-gold" aria-hidden="true" />
                <blockquote className="mt-3 flex-1 italic text-slate-500">{r.text}</blockquote>
                <figcaption className="mt-5 border-t border-slate-100 pt-4 text-sm font-semibold text-navy">
                  {r.name || " "} {r.town && <span className="font-normal text-slate-500">· {r.town}</span>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {/* CONFIRM WITH CLIENT: Google review link (site.links.googleReview) */}
          <a href={site.links.googleReview} className="btn-outline text-navy" target="_blank" rel="noopener noreferrer">
            Leave a Google Review
          </a>
          <a href={site.phone.tel} className="btn-gold">Call {site.phone.display}</a>
        </div>
      </div>
    </section>
  );
}
