"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Phone, MessageSquare, Clock, MapPin, Mail, CheckCircle2, Loader2 } from "lucide-react";
import { site } from "@/lib/site";
import { SELECT_SERVICE_EVENT } from "./Services";

type Errors = Partial<Record<"name" | "phone" | "email" | "service", string>>;

const sizes = ["Single item", "Few items", "Studio–1 bed", "2–3 bed", "4+ bed"];

const inputCls =
  "mt-1.5 block w-full min-h-[48px] rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base text-navy placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40 aria-[invalid=true]:border-red-500";
const labelCls = "block text-sm font-semibold text-navy";

export default function ContactForm() {
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // Pre-select a service when a "Get Quote" card is clicked
  useEffect(() => {
    const on = (e: Event) => setService((e as CustomEvent<string>).detail);
    window.addEventListener(SELECT_SERVICE_EVENT, on);
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, on);
  }, []);

  function validate(fd: FormData): Errors {
    const e: Errors = {};
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").replace(/\D/g, "");
    const email = String(fd.get("email") || "").trim();
    if (!name) e.name = "Please tell us your name.";
    if (phone.length < 10) e.phone = "Please enter a 10-digit phone number so Mike can call you back.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "That email doesn't look quite right.";
    if (!fd.get("service")) e.service = "Pick the service you need.";
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);
    const e = validate(fd);
    setErrors(e);
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0];
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setStatus("sending");
    try {
      // REPLACE WITH YOUR FORM ENDPOINT — set NEXT_PUBLIC_FORM_ENDPOINT (e.g. https://formspree.io/f/xxxxxxx)
      if (!site.formEndpoint) {
        console.warn("No form endpoint set. See README: 'Set up the booking form'.");
        await new Promise((r) => setTimeout(r, 600));
      } else {
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          body: fd,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("Bad response");
      }
      setStatus("sent");
      form.reset();
      setService("");
    } catch {
      setStatus("error");
    }
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-err`} className="mt-1 text-sm font-medium text-red-600">
        {errors[k]}
      </p>
    ) : null;

  return (
    <section id="contact" className="relative bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr]">
        {/* Contact details */}
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-gold-light">Pre-Book</p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">Pre-Book Your Move</h2>
          <p className="mt-4 text-lg text-white/80">
            Fill in the form and {site.owner} will get back to you with a quote. Need it sooner? Calling is fastest.
          </p>
          <a href={site.phone.tel} className="mt-8 block font-display text-4xl font-bold tracking-wide text-gold-light hover:text-gold sm:text-5xl">
            {site.phone.display}
          </a>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={site.phone.tel} className="btn-gold"><Phone className="h-5 w-5" aria-hidden="true" /> Call {site.owner}</a>
            {/* CONFIRM WITH CLIENT that texting is OK */}
            <a href={site.phone.sms} className="btn-outline text-white"><MessageSquare className="h-5 w-5" aria-hidden="true" /> Text {site.owner}</a>
          </div>
          <ul className="mt-8 space-y-4 text-white/85">
            {site.email && (
              <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-gold-light" aria-hidden="true" /><a href={`mailto:${site.email}`} className="hover:text-gold-light">{site.email}</a></li>
            )}
            <li className="flex gap-3"><Clock className="h-5 w-5 shrink-0 text-gold-light" aria-hidden="true" />{site.hours}</li>
            <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-gold-light" aria-hidden="true" />{site.location.label}. In-town and out-of-town moves.</li>
          </ul>
        </div>

        {/* Form */}
        <div className="rounded-2xl bg-white p-6 text-navy shadow-2xl sm:p-8">
          {status === "sent" ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center" role="status" aria-live="polite">
              <CheckCircle2 className="h-16 w-16 text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-3xl font-bold uppercase">Thanks, got it!</h3>
              <p className="mt-2 max-w-sm text-slate-600">
                {site.owner} will be in touch soon with your quote. If your move is coming up fast, give him a call at{" "}
                <a href={site.phone.tel} className="font-bold text-navy underline decoration-gold">{site.phone.display}</a>.
              </p>
              <button type="button" className="btn-outline mt-6" onClick={() => setStatus("idle")}>Send another request</button>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" aria-label="Moving booking request">
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div>
                <label htmlFor="name" className={labelCls}>Name *</label>
                <input id="name" name="name" autoComplete="name" className={inputCls} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
                {err("name")}
              </div>
              <div>
                <label htmlFor="phone" className={labelCls}>Phone *</label>
                <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="403-555-1234" className={inputCls} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-err" : undefined} />
                {err("phone")}
              </div>
              <div>
                <label htmlFor="email" className={labelCls}>Email</label>
                <input id="email" name="email" type="email" inputMode="email" autoComplete="email" className={inputCls} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
                {err("email")}
              </div>
              <div>
                <label htmlFor="service" className={labelCls}>Service needed *</label>
                <select id="service" name="service" value={service} onChange={(e) => setService(e.target.value)} className={inputCls} aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-err" : undefined}>
                  <option value="">Choose a service…</option>
                  {site.services.map((s) => (
                    <option key={s.id} value={s.id}>{s.formLabel}</option>
                  ))}
                  <option value="other">Other</option>
                </select>
                {err("service")}
              </div>
              <div>
                <label htmlFor="date" className={labelCls}>Moving date</label>
                <input id="date" name="moving_date" type="date" className={inputCls} />
              </div>
              <div>
                <label htmlFor="size" className={labelCls}>Number of items / home size</label>
                <select id="size" name="size" className={inputCls} defaultValue="">
                  <option value="">Choose…</option>
                  {sizes.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="pickup" className={labelCls}>Pickup area</label>
                <input id="pickup" name="pickup_area" placeholder="e.g. NW Calgary" className={inputCls} />
              </div>
              <div>
                <label htmlFor="dropoff" className={labelCls}>Drop-off area</label>
                <input id="dropoff" name="dropoff_area" placeholder="e.g. SE Calgary" className={inputCls} />
              </div>
              <fieldset className="sm:col-span-2">
                <legend className={labelCls}>Stairs or elevator?</legend>
                <div className="mt-1.5 flex gap-3">
                  {["Yes", "No"].map((v) => (
                    <label key={v} className="flex min-h-[48px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 font-semibold has-[:checked]:border-gold has-[:checked]:bg-gold/15">
                      <input type="radio" name="stairs_or_elevator" value={v} className="h-4 w-4 accent-[#B88A24]" />
                      {v}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelCls}>Message</label>
                <textarea id="message" name="message" rows={4} placeholder="What's moving? Anything heavy or awkward?" className={`${inputCls} min-h-[120px]`} />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" disabled={status === "sending"} className="btn-gold w-full text-lg disabled:opacity-70">
                  {status === "sending" ? <><Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending…</> : "Request My Moving Quote"}
                </button>
                {status === "error" && (
                  <p className="mt-3 text-center text-sm font-medium text-red-600" role="alert">
                    Something went wrong sending that. Please call or text {site.owner} at{" "}
                    <a href={site.phone.tel} className="underline">{site.phone.display}</a>.
                  </p>
                )}
                <p className="mt-3 text-center text-xs text-slate-500">{site.priceDisclaimer} Fields marked * are required.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
