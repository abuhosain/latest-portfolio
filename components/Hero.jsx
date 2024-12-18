"use client";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import RotatingShape from "./RotatingShape";
import Header from "./Header";
import Stats from "./Stats/Stats";
const Hero = () => {
  return (
    <section className="h-[800px] relative bg-accent/10 xl:bg-white" id="home">
      {/* header */}
      <Header />

      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
          <h1 className="h1 mb-2 max-w-[350px] xl:max-w-none">
            <span className="text-accent">I Build And</span> Design Powerfull
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                "Frontend",
                200,
                "Backend",
                200,
                "Full-Stack",
                200,
                "Applications",
                200,
              ]}
              speed={30}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4"
            />
          </h1>
          <p className="lead max-w-[476px] mb-7">
            Delivering powerfull, custom websites that blend aeshtetics with
            performance
          </p>
          <ScrollLink to="contact" smooth>
            <button className="btn btn-accent mb-8">Contact Me</button>
          </ScrollLink>
          {/* stats */}
          <Stats />
        </div>
        {/* image */}
        <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
          <div className="absolute w-[658px] h-[742px] -bottom-10 z-40 left-[6.5vw]">
            <Image
              src="/hosain.png"
              fill
              quality={100}
              priority
              className="object-contain"
              alt="Abu Hosain"
            />
          </div>
          {/* arrow shap */}
          <div className="hidden xl:flex absolute top-60 left-[4vw]">
            <Image
              src="/assets/hero/arrow.svg"
              width={160}
              height={160}
              alt="Abu Hosain arrow"
            />
          </div>
          {/* shap 1 */}
          <div className="absolute top-[600px] left-[3vw]">
            <RotatingShape
              content={
                <Image
                  src="/assets/hero/shape-1.svg"
                  width={38}
                  height={38}
                  alt="shap 1"
                />
              }
              direction="left"
              duration={6}
            />
          </div>

          {/* shap 2 */}
          <div className="absolute top-[240px] xl:left-[30vw]">
            <RotatingShape
              content={
                <Image
                  src="/assets/hero/shape-2.svg"
                  width={34}
                  height={34}
                  alt="shap 1"
                />
              }
              direction="right"
              duration={5}
            />
          </div>

          {/* shap 3 */}
          <div className="absolute top-[400px] xl:left-[40vw]">
            <RotatingShape
              content={
                <Image
                  src="/assets/hero/shape-3.svg"
                  width={36}
                  height={36}
                  alt="shap 3"
                />
              }
              direction="left"
              duration={7}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
