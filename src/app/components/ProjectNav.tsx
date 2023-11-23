"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Props {
  projectName: string;
}

// export default function ProjectNav() {
const ProjectNav: React.FC<Props> = ({ projectName }) => {
  // Background opacity
  const [opacity, setOpacity] = useState(0);
  // Blurry effect behind the navbar
  const [blurValue, setBlurValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (0.3 * window.innerHeight)) * 100;
      const newOpacity = Math.min(0.75, scrollPercent / 100); // Maximum 75% opacity
      setOpacity(newOpacity);

      const maxScroll = document.body.clientHeight * 0.05;
      const newBlurValue = Math.min(15, (window.scrollY / maxScroll) * 15); // Maximum 15px for backdrop blur
      setBlurValue(newBlurValue);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const navbarStyle = {
    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
    backdropFilter: `blur(${blurValue}px)`,
  };

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav
      className="navbar w-full flex flex-col justify-center items-center fixed top-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0)] backdrop-blur-0"
      style={navbarStyle}
    >
      <div className="flex items-center gap-[5px] w-[90%] mt-[15px] mb-[15px]">
        {/* Brand */}
        <Link href="/" className="text-center leading-[25px] group mr-[10px]">
          <p className="text-[20px] font-black text-[#4FACFE] group-hover:drop-shadow-[0_0px_15px_rgba(79,172,254,1)] transition-all ease-in-out duration-200">
            FREDERIK
          </p>
          <p className="text-[20px] font-black text-[#FE5196] group-hover:drop-shadow-[0_0px_15px_rgba(254,81,150,1)] transition-all ease-in-out duration-200">
            DIAMOND
          </p>
        </Link>

        <svg
          width="30"
          height="30"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#78787878"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M19 12L31 24L19 36"
          />
        </svg>
        <Link
          href="/#projects"
          className="font-semibold text-gray-500 px-[10px] py-[5px] rounded-lg hover:text-white hover:bg-gray-600/50 transition-all ease-in-out duration-200"
        >
          PROJECTS
        </Link>
        <svg
          width="30"
          height="30"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#78787878"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M19 12L31 24L19 36"
          />
        </svg>
        <Link
          href="/projects/blopstr"
          className="font-semibold text-gray-500 px-[10px] py-[5px] rounded-lg hover:text-white hover:bg-gray-600/50 transition-all ease-in-out duration-200"
        >
          {projectName}
        </Link>
      </div>
    </nav>
  );
};

export default ProjectNav;
