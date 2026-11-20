import { UserRound, Container, CalendarClock, Layers } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

const blocks = [
  { icon: UserRound, title: `Talk to ${site.owner} directly`, text: "Call or text the owner himself. No call centre, no runaround." },
  { icon: Container, title: "Enclosed trailer", text: `A ${site.trailer.size} enclosed trailer keeps your things out of the rain, snow and wind.` },
  { icon: CalendarClock, title: "Available 7 days", text: "Call anytime to book. Pre-book your date so it's locked in." },
  { icon: Layers, title: "Big or small, we take it", text: "One mattress, a full house, a load of junk or just extra hands." },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Why Calgary Calls <span className="text-gold-gradient">Diamond Delivery</span>
          </h2>
          <p className="mt-4 text-lg text-white/75">Reliable, professional and on-time service at affordable rates.</p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <div className="h-full rounded-xl border border-white/10 bg-navy-2 p-6">
                <b.icon className="h-9 w-9 text-gold-light" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide">{b.title}</h3>
                <p className="mt-2 text-white/75">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a href="#contact" className="btn-gold">Pre-Book Your Move</a>
        </div>
      </div>
    </section>
  );
}
