import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
 

const About = () => {
  return (
    <section className="bg-yellow-200 py-96" id="about">
       <AnimatedText text="this is a title" textStyles="h2" />
    </section>
  );
};

export default About;
