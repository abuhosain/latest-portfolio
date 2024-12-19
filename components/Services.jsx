import Image from "next/image";

const services = [
  {
    icon: "assets/services/icon1.png",
    title: "UI UX Design",
    descripiton: "Design compelling engaging user experiences.",
  },
  {
    icon: "assets/services/icon2.png",
    title: "Web Development",
    descripiton:
      "Developing fast, responsive websites that look great on all devices.",
  },
  {
    icon: "assets/services/icon3.png",
    title: "E-comerce Solutions",
    descripiton: "Building custom e-commerce solutions that drive sales.",
  },
  {
    icon: "assets/services/icon4.png",
    title: "Care & Support",
    descripiton: "Providing updates, maintenance and support for your website.",
  },
];

const Services = () => {
  return <section className="bg-green-200 py-96">Services</section>;
};

export default Services;
