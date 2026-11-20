import { MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export default function ServiceArea() {
  return (
    <section id="area" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-gold-deep">Service Area</p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase leading-tight text-navy sm:text-5xl">
            Serving Calgary &amp; Surrounding Areas
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Based in Calgary. We handle in-town moves and deliveries every day, plus out-of-town moves to or from the city.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Areas served">
            {site.serviceAreas.map((a, i) => (
              <li
                key={a}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  i === 0 ? "bg-gold-gradient text-navy" : "border border-slate-300 text-navy"
                }`}
              >
                {i === 0 && <MapPin className="mr-1 inline h-4 w-4" aria-hidden="true" />}
                {a}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-xl bg-light p-5">
            <p className="font-semibold text-navy">Not sure if we cover you?</p>
            <a href={site.phone.tel} className="btn-gold mt-3">
              <Phone className="h-5 w-5" aria-hidden="true" /> Call {site.phone.display}
            </a>
          </div>
        </Reveal>

        {/* Stylized map graphic (no embed) */}
        <Reveal delay={120}>
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-navy shadow-xl">
            <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Stylized map: Calgary at the centre with surrounding areas around it">
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0" stopColor="#F2C94C" stopOpacity=".35" />
                  <stop offset="1" stopColor="#F2C94C" stopOpacity="0" />
                </radialGradient>
              </defs>
              {Array.from({ length: 11 }, (_, i) => (
                <g key={i} stroke="#ffffff" strokeOpacity=".05">
                  <line x1={i * 40} y1="0" x2={i * 40} y2="400" />
                  <line x1="0" y1={i * 40} x2="400" y2={i * 40} />
                </g>
              ))}
              {/* Roads */}
              <path d="M0 210 L400 190" stroke="#ffffff" strokeOpacity=".18" strokeWidth="4" />
              <path d="M195 0 L205 400" stroke="#ffffff" strokeOpacity=".18" strokeWidth="4" />
              <path d="M40 40 L360 360" stroke="#ffffff" strokeOpacity=".08" strokeWidth="3" />
              {/* Bow River style curve */}
              <path d="M0 120 C 120 160, 160 230, 260 220 S 360 280, 400 300" stroke="#6b8bbf" strokeOpacity=".45" strokeWidth="3" fill="none" />
              <circle cx="200" cy="200" r="170" fill="none" stroke="#D4A63A" strokeOpacity=".35" strokeDasharray="4 8" />
              <circle cx="200" cy="200" r="110" fill="url(#glow)" />
              <circle cx="200" cy="200" r="110" fill="none" stroke="#D4A63A" strokeOpacity=".6" strokeWidth="1.5" />
              {[[200, 60], [330, 160], [300, 320], [90, 300], [70, 140]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="5" fill="#ffffff" fillOpacity=".6" />
              ))}
              <g transform="translate(200 200)">
                <circle r="16" fill="#F2C94C" />
                <circle r="6" fill="#0B1220" />
              </g>
              <text x="200" y="245" textAnchor="middle" fill="#ffffff" fontFamily="var(--font-oswald)" fontSize="22" fontWeight="700" letterSpacing="2">CALGARY</text>
              <text x="200" y="385" textAnchor="middle" fill="#F2C94C" fillOpacity=".8" fontSize="12" letterSpacing="2">SURROUNDING AREAS</text>
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
