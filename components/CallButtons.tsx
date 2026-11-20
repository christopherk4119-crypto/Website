import { Phone, MessageSquare } from "lucide-react";
import { site } from "@/lib/site";

/** Primary call CTA + "Text Mike" SMS link. Used across sections. */
export function CallButtons({ dark = true, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a href={site.phone.tel} className="btn-gold text-base">
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call {site.owner}: {site.phone.display}
      </a>
      {/* CONFIRM WITH CLIENT that texting is OK */}
      <a
        href={site.phone.sms}
        className={`btn-outline text-base ${dark ? "text-white" : "text-navy"}`}
      >
        <MessageSquare className="h-5 w-5" aria-hidden="true" />
        Text {site.owner}
      </a>
    </div>
  );
}
