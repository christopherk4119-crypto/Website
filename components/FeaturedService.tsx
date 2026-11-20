import { PhoneCall, ClipboardList, CalendarDays, Truck } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { CallButtons } from "./CallButtons";

const steps = [
  { icon: PhoneCall, title: "Call or text", text: `Reach ${site.owner} directly at ${site.phone.display}. Tell him what's moving and where.` },
  { icon: ClipboardList, title: "Get a quote", text: "You get a price based on your items, distance, stairs and help needed." },
  { icon: CalendarDays, title: "Pick your date", text: "Choose the day that works. Pre-booking locks in your spot." },
  { icon: Truck, title: "We move it", text: `Loaded into the ${site.trailer.size} enclosed trailer and delivered on time.` },
];

export default function FeaturedService() {
  return (
    <section id="moving" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-gold-deep">Local Moving in Calgary</p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight text-navy sm:text-5xl">
            Your stuff, moved on time, with no runaround
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Moving across Calgary doesn&apos;t need a big moving company. Here&apos;s how it works with us.
          </p>
        </Reveal>

        <ol className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
          <div className="absolute left-7 top-0 h-full w-px bg-gradient-to-b from-gold to-gold/10 md:left-0 md:top-7 md:h-px md:w-full md:bg-gradient-to-r" aria-hidden="true" />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 150} className="relative flex gap-5 md:flex-col md:gap-4">
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy text-gold-light shadow-lg ring-4 ring-white">
                <s.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-gold-deep">Step {i + 1}</p>
                <h3 className="font-display text-2xl font-bold uppercase text-navy">{s.title}</h3>
                <p className="mt-1 text-slate-600">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 flex flex-col items-center gap-3 text-center">
          <p className="font-semibold text-navy">Ready to book your local move?</p>
          <CallButtons dark={false} className="justify-center" />
        </Reveal>
      </div>
    </section>
  );
}
