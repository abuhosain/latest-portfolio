"use client";

import React, { useEffect } from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import FixedMenu from "@/components/FixedMenu";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Work from "@/components/Work/Work";
import Testimonials from "@/components/Testimonial/Testimonials";

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
      {/* temporary div */}
      <div className="h-[3000px]"></div>
    </div>
  );
};

export default Home;
