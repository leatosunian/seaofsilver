import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import WorkMethodology from "./components/WorkMethodology";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Metrics from "./components/Metrics";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
