"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

interface NavbarProps {
  homeRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
  blogRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

const Navbar: React.FC<NavbarProps> = ({
  homeRef,
  projectsRef,
  blogRef,
  contactRef,
}) => {
  // Background opacity
  const [opacity, setOpacity] = useState(0);
  // Blurry effect behind the navbar
  const [blurValue, setBlurValue] = useState(0);

  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (0.3 * window.innerHeight)) * 100;
      const newOpacity = Math.min(0.75, scrollPercent / 100); // Maximum 75% opacity
      setOpacity(newOpacity);

      const maxScroll = document.body.clientHeight * 0.05;
      const newBlurValue = Math.min(15, (window.scrollY / maxScroll) * 15); // Maximum 15px for backdrop blur
      setBlurValue(newBlurValue);

      // Navbar active section
      const sections = [
        { id: "home", ref: homeRef },
        { id: "projects", ref: projectsRef },
        { id: "blog", ref: blogRef },
        { id: "contact", ref: contactRef },
      ];

      const currentSection = sections.find((section) => {
        const element = section.ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 0 && rect.bottom > 0;
        }
        return false;
      });

      setActiveSection(currentSection ? currentSection.id : "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [homeRef, projectsRef, blogRef, contactRef]);

  const handleNavLinkClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkClass = (section: string) =>
    `text-[15px] font-medium px-[15px] ${
      activeSection === section ? "text-white" : "text-gray-400"
    } hover:text-white transition ease-in-out`;

  const navbarStyle = {
    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
    backdropFilter: `blur(${blurValue}px)`,
  };

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav
        className="navbar w-full flex flex-col justify-center items-center fixed top-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0)] backdrop-blur-0"
        style={navbarStyle}
      >
        <div className="flex justify-between w-[90%] mt-[15px] mb-[15px]">
          {/* Brand */}
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("home");
            }}
            className="text-center leading-[25px] group"
          >
            <p className="text-[20px] font-black text-[#4FACFE] group-hover:drop-shadow-[0_0px_15px_rgba(79,172,254,1)] transition-all ease-in-out duration-200">
              FREDERIK
            </p>
            <p className="text-[20px] font-black text-[#FE5196] group-hover:drop-shadow-[0_0px_15px_rgba(254,81,150,1)] transition-all ease-in-out duration-200">
              DIAMOND
            </p>
          </Link>
          {/* Desktop Menu */}
          <div className=" hidden sm:flex items-center">
            <Link
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick("home");
              }}
              className={linkClass("home")}
            >
              HOME
            </Link>
            <Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick("projects");
              }}
              className={linkClass("projects")}
            >
              PROJECTS
            </Link>
            <Link
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick("blog");
              }}
              className={linkClass("blog")}
            >
              BLOG
            </Link>
            <Link
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick("about");
              }}
              className={linkClass("about")}
            >
              ABOUT
            </Link>
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick("contact");
              }}
              className={linkClass("contact")}
            >
              CONTACT
            </Link>
          </div>
          {/* Mobile Menu */}
          <div
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
            id="mobile-menu"
            className="flex sm:hidden h-full items-center justify-center cursor-pointer"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
              />
            </svg>
          </div>
        </div>
      </nav>
      {openMenu ? (
        <div className="fixed z-[49] w-full h-full flex items-center justify-center bg-black/75 backdrop-blur-md">
          <div className="flex flex-col w-full">
            <Link
              href="#home"
              onClick={(e) => {
                setOpenMenu(!openMenu);
                e.preventDefault();
                handleNavLinkClick("home");
              }}
              className="text-[25px] text-center font-bold w-full py-[20px] transition hover:bg-[#1a1a1a]/60"
            >
              HOME
            </Link>
            <Link
              href="#projects"
              onClick={(e) => {
                setOpenMenu(!openMenu);
                e.preventDefault();
                handleNavLinkClick("projects");
              }}
              className="text-[25px] text-center font-bold w-full py-[20px] transition hover:bg-[#1a1a1a]/60"
            >
              PROJECTS
            </Link>
            <Link
              href="#blog"
              onClick={(e) => {
                setOpenMenu(!openMenu);
                e.preventDefault();
                handleNavLinkClick("blog");
              }}
              className="text-[25px] text-center font-bold w-full py-[20px] transition hover:bg-[#1a1a1a]/60"
            >
              BLOG
            </Link>
            <Link
              href="#about"
              onClick={(e) => {
                setOpenMenu(!openMenu);
                e.preventDefault();
                handleNavLinkClick("about");
              }}
              className="text-[25px] text-center font-bold w-full py-[20px] transition hover:bg-[#1a1a1a]/60"
            >
              ABOUT
            </Link>
            <Link
              href="#contact"
              onClick={(e) => {
                setOpenMenu(!openMenu);
                e.preventDefault();
                handleNavLinkClick("contact");
              }}
              className="text-[25px] text-center font-bold w-full py-[20px] transition hover:bg-[#1a1a1a]/60"
            >
              CONTACT
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
