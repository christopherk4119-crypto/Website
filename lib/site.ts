/**
 * ALL business details live here. Edit this file to update the whole site.
 * Anything marked // CONFIRM WITH CLIENT is a placeholder or an unverified detail.
 */

export type ServiceId =
  | "local-move"
  | "out-of-town-move"
  | "single-item"
  | "appliance"
  | "junk-removal"
  | "labour";

export const site = {
  // CONFIRM WITH CLIENT: flyer says "Diamond Delivery Service", Google says "Diamond Delivery Services"
  name: "Diamond Delivery Service",
  tagline: "Moving Excellence, Delivered.",
  secondaryLine: "Professional. Reliable. On-Time.",
  owner: "Mike",

  phone: {
    display: "403-801-1187",
    tel: "tel:+14038011187",
    // CONFIRM WITH CLIENT that customers can text this number
    sms: "sms:+14038011187",
  },

  // CONFIRM WITH CLIENT: no email found. Leave empty ("") to hide it everywhere.
  email: "",

  // CONFIRM WITH CLIENT: Google lists "Open 24 hours". Using softer wording until confirmed.
  hours: "Available 7 days. Call anytime to book.",
  hoursShort: "Available 7 days",
  // CONFIRM WITH CLIENT before enabling in schema (e.g. ["Mo-Su 00:00-23:59"])
  openingHoursSchema: [] as string[],

  location: {
    city: "Calgary",
    region: "AB",
    regionLong: "Alberta",
    country: "CA",
    label: "Calgary & Surrounding Areas",
  },

  // CONFIRM WITH CLIENT: what does $75 cover? (per hour? minimum? single item?)
  startingPrice: "$75",
  priceDisclaimer: "*Final price depends on the job.",

  // CONFIRM WITH CLIENT: which surrounding towns are served? Only "Calgary & surrounding areas"
  // is confirmed. Once confirmed, add towns here (e.g. "Airdrie", "Cochrane", "Okotoks").
  serviceAreas: ["Calgary", "Surrounding areas", "Out-of-town moves"],

  trailer: {
    size: "14 ft x 7 ft",
    label: "14 ft x 7 ft enclosed moving trailer",
    note: "Fully enclosed, so your things stay dry and secure on the road.",
    equipment: ["Pickup truck", "14 ft x 7 ft enclosed cargo trailer", "Hand truck / dolly"],
  },

  services: [
    {
      id: "local-move",
      formLabel: "Local move",
      title: "Local Moving",
      description:
        "Apartments, condos and houses moved across Calgary. We load, haul in the enclosed trailer and unload.",
      icon: "Home",
    },
    {
      id: "out-of-town-move",
      formLabel: "Out-of-town move",
      title: "In-Town & Out-of-Town Moves",
      description:
        "Moving to or from Calgary? We do trips outside the city too. Call to talk through the distance.",
      icon: "Route",
    },
    {
      id: "single-item",
      formLabel: "Single item delivery",
      title: "Furniture & Mattress Delivery",
      description:
        "One couch, a dresser, a new mattress or a Marketplace find. Picked up and dropped where you want it.",
      icon: "Sofa",
    },
    {
      id: "appliance",
      formLabel: "Appliance delivery",
      title: "Appliance Delivery",
      description:
        "Fridges, washers, dryers and stoves moved with a proper dolly and the right number of hands.",
      icon: "Refrigerator",
    },
    {
      id: "junk-removal",
      // CONFIRM WITH CLIENT: what junk is accepted and how disposal is handled
      formLabel: "Junk removal",
      title: "Junk Removal",
      description:
        "Old furniture and clutter you want gone. We load it up and haul it away.",
      icon: "Trash2",
    },
    {
      id: "labour",
      formLabel: "Labour help only",
      title: "Labour Help",
      description:
        "Already have a truck? Need muscle to load, unload or shift heavy items around the house? We can help.",
      icon: "Dumbbell",
    },
  ] as { id: ServiceId; formLabel: string; title: string; description: string; icon: string }[],

  links: {
    // CONFIRM WITH CLIENT: Google Business Profile review link
    googleReview: "#", // CONFIRM WITH CLIENT
    facebook: "", // add if provided
  },

  // CONFIRM WITH CLIENT: final domain
  url: "https://www.diamonddeliveryservice.ca",

  colors: {
    navy: "#0B1220",
    navy2: "#131C2E",
    gold: "#D4A63A",
    goldLight: "#F2C94C",
    goldDeep: "#B88A24",
    light: "#F4F5F7",
  },

  // REPLACE WITH YOUR FORM ENDPOINT (e.g. https://formspree.io/f/xxxxxxx)
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Moving", href: "#moving" },
  { label: "Service Area", href: "#area" },
  { label: "Contact", href: "#contact" },
];
