import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const data = [
  {
    href: "",
    category: "frontend",
    image: "/assets/work/thumb-3.jpg",
    title: "Velox App",
  },
  {
    href: "",
    category: "frontend",
    image: "/assets/work/thumb-4.jpg",
    title: "Quantam Portfolio",
  },
  {
    href: "",
    category: "frontend",
    image: "/assets/work/thumb-5.jpg",
    title: "Synargy Landing Page",
  },
  {
    href: "",
    category: "fullstack",
    image: "/assets/work/thumb-6.jpg",
    title: "Apollo Travel",
  },
  {
    href: "",
    category: "fullstack",
    image: "/assets/work/thumb-7.jpg",
    title: "Horizon App",
  },
];
const Work = () => {
  //  extract unique categories
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  // create tab with all categories and unique categories
  const tabData = [
    { category: "all" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  // state to manage the currently selected tab
  const [tabValue, setTabValue] = useState("all");
  // number of item to show initially
  const [visibleItems, setVisibleItems] = useState(6);

  // filter data based on selected tab
  const filterWork = (tabValue = "all"
    ? data.filter((itme) => item.category != "all")
    : data.filter((item) => item.category === tabValue));
  return (
    <section className="bg-blue-200 py-96" id="work">
      Work
    </section>
  );
};

export default Work;
