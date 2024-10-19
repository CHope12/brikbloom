"use client";
import { useEffect } from "react";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import How from "@/components/How";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Lenis from "lenis";

export default function Home() {

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();
  
    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      //console.log(e);
    });
  
    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  }), [];

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
