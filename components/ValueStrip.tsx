import { site } from "@/lib/site";

export default function ValueStrip() {
  return (
    <section className="bg-gold-gradient text-navy" aria-label="Booking now">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-5 text-center sm:flex-row sm:gap-4 sm:px-6">
        <p className="font-display text-xl font-bold uppercase tracking-wide sm:text-2xl">
          Booking now in Calgary. One call to {site.owner} and it&apos;s handled.
        </p>
        <a href={site.phone.tel} className="rounded-lg bg-navy px-4 py-2 font-display text-xl font-bold tracking-wide text-gold-light hover:bg-navy-2">
          {site.phone.display}
        </a>
      </div>
    </section>
  );
}
