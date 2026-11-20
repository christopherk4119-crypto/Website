"use client";

import { ArrowRight } from "lucide-react";
import { site, type ServiceId } from "@/lib/site";
import { ServiceIcon } from "./ServiceIcon";
import { Reveal } from "./Reveal";

export const SELECT_SERVICE_EVENT = "dds:select-service";

/** Scroll to the form and pre-select the service in the dropdown. */
export function selectService(id: ServiceId) {
  window.dispatchEvent(new CustomEvent(SELECT_SERVICE_EVENT, { detail: id }));
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export default function Services() {
  return (
    <section id="services" className="relative bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-gold-light">Our Services</p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            One Item or a Whole Home. <span className="text-gold-gradient">One Call.</span>
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Moving help, delivery and hauling around Calgary, done by {site.owner} with a truck and enclosed trailer.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 100}>
              <article className="group flex h-full flex-col rounded-xl border border-white/10 bg-navy-2 p-6 shadow-lg transition duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_10px_40px_-10px_rgba(212,166,58,.5)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-gradient text-navy">
                  <ServiceIcon name={s.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-wide">{s.title}</h3>
                <p className="mt-2 flex-1 text-white/75">{s.description}</p>
                <button
                  type="button"
                  onClick={() => selectService(s.id)}
                  className="mt-5 inline-flex min-h-[44px] items-center gap-1.5 self-start font-semibold text-gold-light hover:gap-3 transition-all"
                  aria-label={`Get a quote for ${s.title}`}
                >
                  Get Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
