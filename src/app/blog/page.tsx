"use client";

import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import BlogNavbar from "./BlogNavbar";

const Timeline = dynamic(() => import("./Timeline"));
const Articles = dynamic(() => import("./Articles"));
const Pictures = dynamic(() => import("./Pictures"));
const Videos = dynamic(() => import("./Videos"));

const sections = ["timeline", "articles", "pictures", "videos"];

const BlogPage = () => {
  const [activeSection, setActiveSection] = useState("timeline");
  const [direction, setDirection] = useState(0);
  const [filterType, setFilterType] = useState<string>("all");

  const handleSetActiveSection = (section: string) => {
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = sections.indexOf(section);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveSection(section);
  };

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
    <div className="flex flex-col items-center">
      <BlogNavbar
        setActiveSection={handleSetActiveSection}
        setFilterType={setFilterType}
        activeSection={activeSection}
      />
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
    </div>
  );
};

export default BlogPage;
