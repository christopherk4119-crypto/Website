import { Phone, Clock, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gold/30 bg-[#070C16] pb-28 pt-14 text-white/80 md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 flex items-center gap-2">
            <span className="h-px w-6 bg-gold" />
            <span className="font-script text-2xl text-gold-light">{site.tagline}</span>
            <span className="h-px w-6 bg-gold" />
          </p>
          <p className="mt-4 text-sm">{site.secondaryLine}</p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white">Contact</h2>
          <ul className="mt-3 space-y-2.5 text-sm">
            <li className="flex gap-2"><Phone className="h-4 w-4 text-gold-light" aria-hidden="true" /><a href={site.phone.tel} className="font-semibold text-white hover:text-gold-light">{site.phone.display}</a></li>
            {site.email && <li className="flex gap-2"><Mail className="h-4 w-4 text-gold-light" aria-hidden="true" /><a href={`mailto:${site.email}`}>{site.email}</a></li>}
            <li className="flex gap-2"><Clock className="h-4 w-4 text-gold-light" aria-hidden="true" />{site.hours}</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold-light" aria-hidden="true" />{site.location.label}</li>
          </ul>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white">Explore</h2>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-gold-light">{n.label}</a></li>)}
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 text-sm sm:px-6">
        <p className="text-white/60">{site.services.map((s) => s.title).join(" · ")}</p>
        <p className="mt-4 border-t border-white/10 pt-4 text-white/50">
          © {year} {site.name}, {site.location.city}, {site.location.regionLong}
        </p>
      </div>
    </footer>
  );
}
