import Image from "next/image";
import { Check, Container, ShieldCheck, Ruler } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { STOCK } from "@/lib/images";

const small = ["Furniture: couches, dressers, tables", "Mattresses and bed frames", "Appliances: fridges, washers, dryers, stoves", "Marketplace and online-purchase pickups"];
const big = ["Full local moves across Calgary", "Apartments, condos and houses", "Out-of-town moves to or from Calgary", "Extra hands for loading and unloading"];

export default function Differentiator() {
  return (
    <section className="bg-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold uppercase leading-tight text-navy sm:text-5xl">
            Small Jobs or Whole Homes
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            No job is too small to call about. Same truck, same trailer, same {site.owner}.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="relative h-48">
                <Image src={STOCK.singleItem} alt="A single item packed in a box, ready for delivery" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
              </div>
              <div className="p-7">
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-gold-deep">Small jobs</p>
                <h3 className="font-display text-3xl font-bold uppercase text-navy">Single Items & Deliveries</h3>
                <ul className="mt-4 space-y-2.5">
                  {small.map((t) => (
                    <li key={t} className="flex gap-2.5 text-slate-700"><Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />{t}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn-gold mt-6">Book a Delivery</a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-xl bg-navy p-7 text-white shadow-lg">
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-gold-light">Bigger jobs</p>
              <h3 className="font-display text-3xl font-bold uppercase">Full Local & Out-of-Town Moves</h3>
              <ul className="mt-4 flex-1 space-y-2.5">
                {big.map((t) => (
                  <li key={t} className="flex gap-2.5 text-white/85"><Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-light" aria-hidden="true" />{t}</li>
                ))}
              </ul>

              {/* Trailer spec card */}
              <div className="mt-7 rounded-xl border border-gold/50 bg-navy-2 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-gradient text-navy">
                    <Container className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold uppercase">{site.trailer.label}</p>
                    <p className="text-sm text-white/70">Pulled by our pickup truck</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 rounded-lg bg-white/5 p-3"><Ruler className="h-4 w-4 text-gold-light" aria-hidden="true" />{site.trailer.size}</div>
                  <div className="flex items-center gap-2 rounded-lg bg-white/5 p-3"><ShieldCheck className="h-4 w-4 text-gold-light" aria-hidden="true" />Dry & secure</div>
                </div>
              </div>
              <a href={site.phone.tel} className="btn-gold mt-6 self-start">Call {site.phone.display}</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
