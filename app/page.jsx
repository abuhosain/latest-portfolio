import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Work from "@/components/Work";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Journey />
      <Work />
      <Contact />
      {/* temporary div */}
      <div className="h-[3000px]"></div>
    </div>
  );
};

export default Home;
