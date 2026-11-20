import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueStrip from "@/components/ValueStrip";
import FeaturedService from "@/components/FeaturedService";
import Services from "@/components/Services";
import Differentiator from "@/components/Differentiator";
import OurTruck from "@/components/OurTruck";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { SwooshDivider } from "@/components/Swoosh";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <ValueStrip />
        <FeaturedService />
        <Services />
        <Differentiator />
        <OurTruck />
        <WhyUs />
        <Testimonials />
        <ServiceArea />
        <SwooshDivider />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
