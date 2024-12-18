import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      {/* temporary div */}
      <div className="h-[3000px]"></div>
    </div>
  );
};

export default Home;
