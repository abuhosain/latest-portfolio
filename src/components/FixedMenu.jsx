import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";

// components
import Nav from "./Nav";
import Social from "./Social";

const FixedMenu = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false); //ensure mounted component

  const isMobile = useMediaQuery({
    query: "(max-width : 640px)",
  });

  //   set the component is mounted to prevent the mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleScroll = () => {
        setShowMenuButton(window.scrollY > 150); //show the button after scrolling 150 px
      };

      if (!isMobile) {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      } else {
        // always show the button on mobile;
        setShowMenuButton(true);
      }
    }
  }, [isMobile, isMounted]);
  console.log(showMenuButton);
  //   prevent rendering untill mounted
  if (!isMounted) return null;

  return (
    <div className="fixed w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent">
      {/* menu */}
      <AnimatePresence>
        {showMenu && showMenuButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{duration: 0.3}}
            className="relative w-full max-w-md md:max-w-none h-[400px] bottom-[38rem] xl:bottom-[31.2rem]  px-4 pointer-events-auto"
          >
            <div className="bg-white w-full h-full shadow-custom max-w-[1170px] mx-auto py-12 xl:py-12 px-12 xl:px-32 flex items-center gap-12 rounded-lg">
              <Nav
                containerStyle="md:border-r border-secondary/28 md:pr-12 w-full md:w-auto text-center md:text-left"
                listStyles="flex flex-col justify-center gap-4"
                linkStyles="font-primary text-4xl text-primary cursor-pointer"
                spy={true}
              />
              {/* info */}
              <div className="hidden md:flex mx-auto">
                <div>
                  <div className="flex gap-12 mb-12">
                    {/* Location */}
                    <div className="flex flex-col">
                      <div className="text-[28px] text-accent mb-2">
                        <FiMapPin />
                      </div>
                      <p className="font-semibold text-primary text-lg">
                        Location
                      </p>
                      <p>Bogura, Bangladesh</p>
                    </div>
                    {/* Phone */}
                    <div className="flex flex-col">
                      <div className="text-[28px] text-accent mb-2">
                        <FiPhoneCall />
                      </div>
                      <p className="font-semibold text-primary text-lg">
                        Phone
                      </p>
                      <p>+880 1319 539510</p>
                    </div>
                    {/* Email */}
                    <div className="flex flex-col">
                      <div className="text-[28px] text-accent mb-2">
                        <FiMail />
                      </div>
                      <p className="font-semibold text-primary text-lg">
                        Email
                      </p>
                      <p>abuhosainmin@gmail.com</p>
                    </div>
                  </div>
                  {/* socials */}
                  <Social
                    containerStyles="flex gap-2"
                    iconStyles="text-[20px] w-[32px] h-[32px] text-primary flex items-center justify-center rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* menu button */}
      {/* render button without animatins on mobile */}

      {isMobile ? (
        <div className="fixed z-50 bottom-16">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none pointer-events-auto"
          >
            <CgMenuGridR className="text-4xl text-white" />
          </button>
        </div>
      ) : (
        <AnimatePresence>
          {showMenuButton && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
              }}
              className="fixed z-50 bottom-16 pointer-events-auto"
            >
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none"
              >
                <CgMenuGridR className="text-4xl text-white" />
              </button>
              {/* 10 */}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default FixedMenu;
