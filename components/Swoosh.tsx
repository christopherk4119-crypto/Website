/** Signature element: thin gold diagonal swoosh lines, like the corners of their flyer. */
export function SwooshCorner({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      style={flip ? { transform: "scale(-1,-1)" } : undefined}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="sw-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#D4A63A" stopOpacity="0" />
          <stop offset=".5" stopColor="#F2C94C" />
          <stop offset="1" stopColor="#D4A63A" stopOpacity=".2" />
        </linearGradient>
      </defs>
      <path className="swoosh-shimmer" d="M-20 300 C 120 220, 220 120, 420 -10" stroke="url(#sw-g)" strokeWidth="2.5" />
      <path className="swoosh-shimmer swoosh-sheen" d="M10 300 C 150 230, 250 140, 420 30" stroke="url(#sw-g)" strokeWidth="1.2" style={{ animationDelay: ".3s" }} />
      <path className="swoosh-shimmer" d="M60 300 C 190 240, 280 170, 420 80" stroke="url(#sw-g)" strokeWidth="0.8" style={{ animationDelay: ".6s" }} />
    </svg>
  );
}

/** Section divider: three diagonal gold lines with a small diamond in the middle. */
export function SwooshDivider({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`${dark ? "bg-navy" : "bg-white"} relative h-10 overflow-hidden`} aria-hidden="true">
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" fill="none">
        <path d="M0 34 Q 600 -6 1200 30" stroke="#D4A63A" strokeOpacity=".7" strokeWidth="1.5" />
        <path d="M0 38 Q 600 4 1200 36" stroke="#F2C94C" strokeOpacity=".35" strokeWidth="1" />
      </svg>
      <svg viewBox="0 0 20 20" className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2">
        <polygon points="4,6 16,6 10,16" fill="#D4A63A" />
        <polygon points="6,2 14,2 16,6 4,6" fill="#F2C94C" />
      </svg>
    </div>
  );
}
