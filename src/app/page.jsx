"use client";

import React, { useEffect } from "react";

import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import FixedMenu from "@/src/components/FixedMenu";
import Hero from "@/src/components/Hero";
import Journey from "@/src/components/Journey";
import Services from "@/src/components/Services";
import Work from "@/src/components/Work/Work";
import Testimonials from "@/src/components/Testimonial/Testimonials";
import Footer from "@/src/components/Footer";

const Home = () => {
  // implement locomotive scroll
  useEffect(() => {
    const LoadLocomotiveScroll = async () => {
      const LocoMotiveScroll = (await import("locomotive-scroll")).default;
      new LocoMotiveScroll();
    };
    LoadLocomotiveScroll();
  }, []);
  return (
    <div>
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Journey />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
