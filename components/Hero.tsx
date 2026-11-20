import Image from "next/image";
import { CalendarCheck, Check, MessageSquare, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { SwooshCorner } from "./Swoosh";
import { pickImage, STOCK } from "@/lib/images";

const trust = [
  `Based in ${site.location.city}`,
  "Single items to whole homes",
  `${site.trailer.size} enclosed trailer`,
  site.hoursShort, // CONFIRM WITH CLIENT
];

export default function Hero() {
  // CLIENT'S REAL PHOTOS — DROP FILES IN /public/images/
  const photo = pickImage("/images/real-truck-trailer.jpg", STOCK.box);

  return (
    <section id="top" className="relative overflow-hidden bg-navy pb-16 pt-28 text-white sm:pt-32 lg:pb-24">
      {/* Branded graphic background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 20%, rgba(212,166,58,.18), transparent 60%), radial-gradient(50% 60% at 0% 100%, rgba(242,201,76,.10), transparent 60%), linear-gradient(180deg,#0B1220 0%, #131C2E 100%)",
        }}
      />
      <SwooshCorner className="pointer-events-none absolute -right-10 -top-6 w-[520px] max-w-[80vw] opacity-90" />
      <SwooshCorner flip className="pointer-events-none absolute -bottom-10 -left-10 w-[420px] max-w-[70vw] opacity-70" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.25em] text-gold-light">
            {site.secondaryLine}
          </p>
          <h1 className="font-display text-[42px] font-bold uppercase leading-[1.02] sm:text-6xl lg:text-[68px]">
            Moving &amp; Delivery in Calgary,{" "}
            <span className="text-gold-gradient">Starting at {site.startingPrice}.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            Whether you&apos;re moving a single item or a whole home, we&apos;re here to help. Local moves,
            out-of-town moves, furniture and appliance delivery, junk removal and labour help across Calgary
            and surrounding areas.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.phone.tel} className="btn-gold text-base">
              <Phone className="h-5 w-5" aria-hidden="true" /> Call {site.owner}: {site.phone.display}
            </a>
            <a href="#contact" className="btn-outline text-base text-white">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" /> Pre-Book Your Move
            </a>
          </div>
          {/* CONFIRM WITH CLIENT that texting is OK */}
          <a href={site.phone.sms} className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-gold-light underline-offset-4 hover:underline">
            <MessageSquare className="h-4 w-4" aria-hidden="true" /> Prefer to text? Text {site.owner}
          </a>

          <ul className="mt-8 grid max-w-xl grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-[15px] text-white/90">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold">
                  <Check className="h-3.5 w-3.5 text-navy" strokeWidth={3} aria-hidden="true" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/40 shadow-2xl shadow-black/50 sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src={photo.src}
              alt={
                photo.isReal
                  ? `${site.name} pickup truck with enclosed moving trailer in Calgary`
                  : "Packed moving box ready for a local move"
              }
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-navy/80 p-4 backdrop-blur">
              <p className="font-display text-lg font-semibold uppercase tracking-wide">{site.trailer.label}</p>
              <p className="text-sm text-white/75">{site.trailer.note}</p>
            </div>
          </div>

          {/* Price badge — CONFIRM WITH CLIENT what $75 covers (per hour? minimum? single item?) */}
          <div className="absolute -left-3 -top-6 sm:-left-8" aria-label={`Moving starting at just ${site.startingPrice}`}>
            <div className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full drop-shadow-xl" aria-hidden="true">
                <defs>
                  <linearGradient id="badge" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#F2C94C" />
                    <stop offset="1" stopColor="#D4A63A" />
                  </linearGradient>
                </defs>
                <polygon
                  fill="url(#badge)"
                  points={Array.from({ length: 32 }, (_, i) => {
                    const r = i % 2 === 0 ? 50 : 43;
                    const a = (Math.PI * 2 * i) / 32;
                    return `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`;
                  }).join(" ")}
                />
                <circle cx="50" cy="50" r="38" fill="none" stroke="#0B1220" strokeOpacity=".35" strokeWidth=".8" />
              </svg>
              <div className="relative text-center leading-tight text-navy">
                <div className="text-[10px] font-bold uppercase tracking-wider">Moving starting at just</div>
                <div className="font-display text-4xl font-bold">{site.startingPrice}</div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-right text-xs text-white/60">{site.priceDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}
