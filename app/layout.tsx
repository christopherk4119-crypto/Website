import type { Metadata, Viewport } from "next";
import { Oswald, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { faqs } from "@/lib/faq";

const oswald = Oswald({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-oswald", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
// Script font is used ONLY for the tagline
const script = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-script", display: "swap" });

const title = "Diamond Delivery Service | Moving & Delivery Calgary";
const description = `Local moving, furniture & appliance delivery, junk removal and labour help in Calgary & area. Moving from ${site.startingPrice}. Call Mike ${site.phone.display}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    "movers Calgary",
    "local moving Calgary",
    "furniture delivery Calgary",
    "appliance delivery Calgary",
    "mattress delivery Calgary",
    "junk removal Calgary",
    "moving help Calgary",
    "out-of-town movers Calgary",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: site.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#0B1220", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MovingCompany",
      "@id": `${site.url}/#business`,
      name: site.name,
      slogan: site.tagline,
      url: site.url,
      telephone: "+1-403-801-1187",
      // email: "", // CONFIRM WITH CLIENT, then add
      // openingHours: site.openingHoursSchema, // CONFIRM WITH CLIENT, then add
      priceRange: `From ${site.startingPrice}`, // CONFIRM WITH CLIENT
      image: `${site.url}/opengraph-image`,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.location.city,
        addressRegion: site.location.region,
        addressCountry: site.location.country,
      },
      areaServed: [
        { "@type": "City", name: "Calgary" },
        { "@type": "AdministrativeArea", name: "Calgary and surrounding areas, Alberta" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Moving and delivery services",
        itemListElement: site.services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.description },
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${oswald.variable} ${inter.variable} ${script.variable}`}>
      <body className="font-sans">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-navy">
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
