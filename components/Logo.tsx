import { site } from "@/lib/site";

/** Faceted diamond mark (also used as favicon in app/icon.svg). */
export function DiamondMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="dm-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#c9d0db" />
        </linearGradient>
        <linearGradient id="dm-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e6eaf0" />
          <stop offset="1" stopColor="#9aa4b4" />
        </linearGradient>
      </defs>
      {/* top crown */}
      <polygon points="14,10 50,10 60,24 4,24" fill="url(#dm-a)" />
      <polygon points="14,10 24,24 4,24" fill="#dfe4eb" />
      <polygon points="50,10 60,24 40,24" fill="#b8c1ce" />
      <polygon points="24,24 32,10 40,24" fill="#ffffff" />
      {/* pavilion */}
      <polygon points="4,24 60,24 32,58" fill="url(#dm-b)" />
      <polygon points="4,24 24,24 32,58" fill="#cfd6e0" />
      <polygon points="40,24 60,24 32,58" fill="#8f9aab" />
      <polyline points="14,10 24,24 32,10 40,24 50,10" fill="none" stroke="#0B1220" strokeOpacity=".25" strokeWidth="1" />
      <polyline points="4,24 60,24" fill="none" stroke="#0B1220" strokeOpacity=".25" strokeWidth="1" />
      <polyline points="24,24 32,58 40,24" fill="none" stroke="#0B1220" strokeOpacity=".2" strokeWidth="1" />
    </svg>
  );
}

/**
 * Header logo: SVG mark + wordmark.
 * REPLACE WITH LOGO PNG — transparent background
 * Drop /public/logo.png (fits a 200x80px slot) and swap this component for:
 * <Image src="/logo.png" alt={site.name} width={200} height={80} priority />
 */
export function Logo({ withTagline = false }: { withTagline?: boolean }) {
  return (
    <span className="flex items-center gap-2.5" style={{ maxWidth: 260 }}>
      <DiamondMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[17px] font-bold uppercase tracking-wide text-white sm:text-lg">
          Diamond Delivery
        </span>
        <span className="font-display text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-light">
          Service
        </span>
        {withTagline && (
          <span className="mt-2 flex items-center gap-2">
            <span className="h-px w-5 bg-gold" />
            <span className="font-script text-lg text-gold-light">{site.tagline}</span>
            <span className="h-px w-5 bg-gold" />
          </span>
        )}
      </span>
    </span>
  );
}
