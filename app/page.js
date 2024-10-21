import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import How from "@/components/How";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <main className="overflow-hidden">
      <Nav />
      <Hero />      
      <Services />
      <About />
      <Testimonials />
      <How />
      <Contact />
      <Footer />
    </main>
  );
}
