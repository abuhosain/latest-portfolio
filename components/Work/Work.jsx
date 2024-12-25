"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import AnimatedText from "../AnimatedText";

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
  const filterWork =
    tabValue === "all"
      ? data.filter((item) => item.category !== "all")
      : data.filter((item) => item.category === tabValue);

  // handle load more button click
  const loadMoreItem = () => {
    setVisibleItems(visibleItems + 2);
  };
  return (
    <section className="pt-24 min-h-[1000px] " id="work">
      <div className="container mx-auto">
        <Tabs defaultValue="all" className="w-full flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start  xl:justify-between mb-[30px]">
            <AnimatedText
              text="My Latest Work"
              textStyles="h2 mb-[30px] xl:mb-0"
            />
            {/* render for trigger */}
            <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0">
              {tabData.map((item, index) => (
                <TabsTrigger
                  key={index}
                  value={item.category}
                  className="capitalize w-[120px]"
                  onClick={() => setTabValue(item.category)}
                >
                  {item.category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {/* render content for the selected tab */}
          <TabsContent value={tabValue} className="w-full">
            <div>
              <AnimatePresence>
                {filterWork.slice(0, visibleItems).map((item, index) => (
                  <motion.div>Work item</motion.div>
                ))}
              </AnimatePresence>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Work;
