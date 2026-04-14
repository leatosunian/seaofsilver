import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import ClientLogos from "./components/clientlogos/ClientLogos";
import WhyUs from "./components/whyus/WhyUs";
import Services from "./components/services/Services";
import WorkMethodology from "./components/workmethodology/WorkMethodology";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Metrics from "./components/metrics/Metrics";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ClientLogos />
      <WhyUs />
      <Services />
      <WorkMethodology />
      <Portfolio />
      <Testimonial />
      <Metrics />
      <Contact />
      <Footer />
    </>
  );
}
