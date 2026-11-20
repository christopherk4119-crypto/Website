import Image from "next/image";
import { site } from "@/lib/site";
import { pickImage, STOCK } from "@/lib/images";
import { Reveal } from "./Reveal";

// CLIENT'S REAL PHOTOS — DROP FILES IN /public/images/
// real-trailer-open.jpg, real-truck-trailer.jpg, real-truck-trailer-2.jpg
// Missing files fall back to a stock photo automatically (checked at build time).
const slots = [
  { file: "/images/real-trailer-open.jpg", alt: "Inside our enclosed moving trailer, doors open", fallback: STOCK.box },
  { file: "/images/real-truck-trailer.jpg", alt: `${site.name} pickup truck and enclosed trailer`, fallback: STOCK.singleItem },
  { file: "/images/real-truck-trailer-2.jpg", alt: `${site.name} truck and trailer ready for a Calgary move`, fallback: STOCK.box },
];

export default function OurTruck() {
  const photos = slots.map((s) => ({ ...s, ...pickImage(s.file, s.fallback) }));
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="truck-h">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-gold-deep">The Equipment</p>
            <h2 id="truck-h" className="mt-2 font-display text-4xl font-bold uppercase text-navy sm:text-5xl">Our Truck & Trailer</h2>
          </div>
          <p className="max-w-md text-slate-600">
            {site.trailer.equipment.join(", ")}. {site.trailer.note}
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          {photos.map((p, i) => (
            <Reveal key={p.file} delay={i * 100} className={i === 0 ? "col-span-2 md:col-span-1" : ""}>
              <figure className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <Image
                  src={p.src}
                  alt={p.isReal ? p.alt : "Stock photo placeholder: moving box"}
                  fill
                  sizes="(min-width:768px) 33vw, 50vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
                {!p.isReal && (
                  <figcaption className="absolute bottom-2 left-2 rounded bg-navy/80 px-2 py-1 text-xs text-white/80">
                    Real photo coming soon
                  </figcaption>
                )}
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
