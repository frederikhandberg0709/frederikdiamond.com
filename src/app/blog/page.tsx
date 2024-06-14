"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import BlogNavbar from "./BlogNavbar";
import Layout from "./layout";

const Timeline = dynamic(() => import("./Timeline"));
const TimelinePage = dynamic(() => import("./timeline/page"));
const Articles = dynamic(() => import("./Articles"));
const Pictures = dynamic(() => import("./Pictures"));
const PicturesPage = dynamic(() => import("./pictures/page"));
const Videos = dynamic(() => import("./Videos"));

const sections = ["timeline", "articles", "pictures", "videos"];

const BlogPage = () => {
  const [activeSection, setActiveSection] = useState("timeline");
  const [direction, setDirection] = useState(0);
  const [filterType, setFilterType] = useState<string>("all");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleSetActiveSection = (section: string) => {
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = sections.indexOf(section);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveSection(section);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const scrollDifference = Math.abs(currentScrollPos - prevScrollPos);

    if (scrollDifference >= 50) {
      if (prevScrollPos > currentScrollPos) {
        setIsVisible(true); // Scrolling up
      } else {
        setIsVisible(false); // Scrolling down
      }
      setPrevScrollPos(currentScrollPos);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, isVisible]);

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      position: "absolute",
    }),
  };

  // const variants = {
  //   enter: (direction: number) => ({
  //     x: direction > 0 ? "100%" : "-100%",
  //     opacity: 0,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeInOut",
  //     },
  //   }),
  //   center: {
  //     x: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeInOut",
  //     },
  //   },
  //   exit: (direction: number) => ({
  //     x: direction < 0 ? "100%" : "-100%",
  //     opacity: 0,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeInOut",
  //     },
  //   }),
  // };

  return (
    <Layout>
      <div className="flex flex-col items-center">
        {/* <BlogNavbar
          setActiveSection={handleSetActiveSection}
          setFilterType={setFilterType}
          activeSection={activeSection}
        /> */}
        <div className="w-full max-w-4xl p-4">
          <AnimatePresence initial={false} custom={direction}>
            {activeSection === "timeline" && (
              <motion.div
                key="timeline"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Timeline />
              </motion.div>
            )}
            {activeSection === "timelinetest" && (
              <motion.div
                key="timeline"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <TimelinePage />
              </motion.div>
            )}
            {activeSection === "articles" && (
              <motion.div
                key="articles"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Articles />
              </motion.div>
            )}
            {activeSection === "pictures" && (
              <motion.div
                key="pictures"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Pictures />
              </motion.div>
            )}
            {activeSection === "PicturesPage" && (
              <motion.div
                key="pictures"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <PicturesPage />
              </motion.div>
            )}
            {activeSection === "videos" && (
              <motion.div
                key="videos"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Videos />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button
          className={`sm:hidden fixed bottom-[30px] right-[20px] px-[20px] py-[10px] rounded-full shadow-lg shadow-blue-500/50 hover:shadow-blue-500/75 bg-gradient-to-b from-blue-500 to-blue-700 transition-transform duration-300 ease-in-out ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          Filters
        </button>
      </div>
    </Layout>
  );
};

export default BlogPage;
