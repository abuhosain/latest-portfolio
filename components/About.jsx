import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const About = () => {
  return (
    <section className="relative pt-12 pb-24" id="about">
      <div className="container mx-auto h-full">
        {/* Image */}
        <div className="h-full flex items-center justify-center">
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[300px]">
              {/* shape */}
              <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
              {/* image */}
              <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[350px] flex items-end justify-center">
                <Image
                  src="/hosain-about.png"
                  width={350}
                  height={478}
                  quality={100}
                  priority
                  alt="Abu Hosain"
                />
              </div>
              {/* rotating shape */}
              <div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src="/assets/about/shape-1.svg"
                    width={160}
                    height={160}
                    alt=""
                  />
                </motion.div>
                <div className="absolute text-center text-white">
                  <div className="text-5xl font-bold leading-none">2+</div>
                  <div className="leading-none text-center text-lg">
                    Years of <br /> Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* text */}
          <div className="text-center xl:text-left w-full xl:w-1/2 mx-auto xl:mx-0 flex flex-col gap-6">
            <div>
              <AnimatedText text="Abu Hosain" textStyles="h2 mb-2" />
              <p className="text-lg">Full Stack Developer</p>
            </div>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
              I’m a full-stack developer proficient in the MERN stack and SQL, crafting user-friendly web applications with robust, scalable back-end systems. I’m passionate about delivering innovative and efficient solutions.
              </p>
              {/* Info items */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
