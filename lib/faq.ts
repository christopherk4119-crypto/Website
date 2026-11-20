import { site } from "./site";

/** FAQ content. Used by the FAQ section AND the FAQPage JSON-LD. */
export const faqs = [
  {
    q: `How much does a move cost?`,
    // CONFIRM WITH CLIENT: what $75 covers (per hour? minimum? single item?)
    a: `Moving starts at ${site.startingPrice}. The final price depends on the job: what's moving, how far, stairs, and how much help you need. Call or text ${site.owner} at ${site.phone.display} for a quote.`,
  },
  {
    q: "Can you move just one item?",
    a: "Yes. Single items are welcome: a couch, mattress, appliance, or a Marketplace pickup. No job is too small to call about.",
  },
  {
    q: "How big is your trailer?",
    a: `We use a ${site.trailer.label}, pulled by our pickup truck. Being enclosed, it keeps your things dry and secure on the road.`,
  },
  {
    q: "Do you do moves outside Calgary?",
    // CONFIRM WITH CLIENT: how far out-of-town moves go and how they're priced
    a: `Yes, we do in-town and out-of-town moves. Call ${site.phone.display} with your pickup and drop-off locations and we'll let you know.`,
  },
  {
    q: "How far ahead should I book?",
    a: `Pre-booking is the best way to lock in your date. Call ${site.owner} anytime, or send the booking form and we'll get back to you.`,
  },
  {
    q: "Are you insured?",
    // CONFIRM WITH CLIENT: insurance / coverage details. Replace this answer once confirmed.
    a: `Please ask ${site.owner} about coverage for your move when you call.`,
  },
];
