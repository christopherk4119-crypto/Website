import { Phone, CalendarCheck } from "lucide-react";
import { site } from "@/lib/site";

/** Sticky bottom bar on mobile: Call Now (gold) + Pre-Book (outlined). */
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/95 p-2.5 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2.5">
        <a href={site.phone.tel} className="btn-gold !px-2 text-base" aria-label={`Call ${site.owner} at ${site.phone.display}`}>
          <Phone className="h-5 w-5" aria-hidden="true" /> Call Now
        </a>
        <a href="#contact" className="btn-outline !px-2 text-base text-white">
          <CalendarCheck className="h-5 w-5" aria-hidden="true" /> Pre-Book
        </a>
      </div>
    </div>
  );
}
