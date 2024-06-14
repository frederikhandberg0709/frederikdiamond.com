import Image from "next/image";
import Link from "next/link";
import "./styling.css";
import ArrowIcon from "/public/arrow-icon.svg";
import { MutableRefObject, useEffect, useRef, useState } from "react";

interface NavbarProps {
  setActiveSection: (section: string) => void;
  setFilterType: (type: string) => void;
  activeSection: string;
  onFilterButtonClick: (buttonPosition: {
    top: number;
    left: number;
    width: number;
  }) => void;
  // onIsFilterButtonClick: React.Dispatch<React.SetStateAction<boolean>>;
  isFilterMenuOpen: boolean;
  closeFilterMenu: () => void;
  filterButtonRef: MutableRefObject<HTMLButtonElement | null>;
}

const BlogNavbar: React.FC<NavbarProps> = ({
  setActiveSection,
  setFilterType,
  activeSection,
  onFilterButtonClick,
  isFilterMenuOpen,
  closeFilterMenu,
  filterButtonRef,
}) => {
  const [openBlogMenu, setOpenBlogMenu] = useState(false);

  const toggleFilterMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (isFilterMenuOpen) {
      closeFilterMenu();
    } else {
      const buttonRect = filterButtonRef.current?.getBoundingClientRect();
      if (buttonRect) {
        onFilterButtonClick({
          top: buttonRect.bottom + window.scrollY,
          left: buttonRect.left + buttonRect.width / 2,
          width: buttonRect.width,
        });
      }
    }
  };

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden fixed z-[99] bg-black/80 backdrop-blur-lg h-[60px] w-full">
        <div className="flex justify-between items-center h-full mx-[50px]">
          {/* Brand */}
          <Link href="/" className="text-center leading-[25px] group">
            <p className="text-[20px] font-black text-[#4FACFE] group-hover:drop-shadow-[0_0px_15px_rgba(79,172,254,1)] transition-all ease-in-out duration-200">
              FREDERIK
            </p>
            <p className="text-[20px] font-black text-[#FE5196] group-hover:drop-shadow-[0_0px_15px_rgba(254,81,150,1)] transition-all ease-in-out duration-200">
              DIAMOND
            </p>
          </Link>
          <div
            onClick={() => {
              setOpenBlogMenu(!openBlogMenu);
            }}
            id="mobile-menu"
            className="flex h-full items-center justify-center cursor-pointer"
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
      </div>

      {openBlogMenu ? (
        <div className="fixed z-[49] w-full h-full flex items-center justify-center bg-black/75 backdrop-blur-md">
          <div className="flex flex-col w-full">
            <button
              className={`text-[25px] text-center font-bold w-full py-[20px] transition hover:bg-[#1a1a1a]/60`}
            >
              Timeline
            </button>
            <button
              className={`text-[25px] text-center font-bold w-full py-[20px] transition hover:bg-[#1a1a1a]/60`}
            >
              Articles
            </button>
            <button
              className={`text-[25px] text-center font-bold w-full py-[20px] transition hover:bg-[#1a1a1a]/60`}
            >
              Pictures
            </button>
            <button
              className={`text-[25px] text-center font-bold w-full py-[20px] transition hover:bg-[#1a1a1a]/60`}
            >
              Videos
            </button>
          </div>
        </div>
      ) : null}

      {/* Desktop */}
      <div className="hidden fixed z-[99] top-0 left-0 right-0 md:flex justify-center w-full">
        <div className="flex justify-between w-[95%] min-[940px]:w-[80%] pt-[10px]">
          {/* Brand */}
          <Link href="/" className="text-center leading-[25px] group">
            <p className="text-[20px] font-black text-[#4FACFE] group-hover:drop-shadow-[0_0px_15px_rgba(79,172,254,1)] transition-all ease-in-out duration-200">
              FREDERIK
            </p>
            <p className="text-[20px] font-black text-[#FE5196] group-hover:drop-shadow-[0_0px_15px_rgba(254,81,150,1)] transition-all ease-in-out duration-200">
              DIAMOND
            </p>
          </Link>

          {/* Nav Menu */}
          <div className="flex rounded-full bg-black/50 backdrop-blur-xl z-[99] border-gradient">
            <div className="flex gap-[5px] p-[5px]">
              <Link
                href="/blog/timeline"
                onClick={() => setActiveSection("timeline")}
                className={`px-[20px] py-[7px] font-medium rounded-full transition ease-in-out duration-200 ${
                  activeSection === "timeline"
                    ? "text-white bg-white/10"
                    : "hover:bg-white/10"
                }`}
              >
                Timline
              </Link>
              <Link
                href="/blog/articles"
                onClick={() => setActiveSection("articles")}
                className={`px-[20px] py-[7px] font-medium rounded-full transition ease-in-out duration-200 ${
                  activeSection === "articles"
                    ? "text-white bg-white/10"
                    : "hover:bg-white/10"
                }`}
              >
                Articles
              </Link>
              <Link
                href="/blog/pictures"
                onClick={() => setActiveSection("pictures")}
                className={`px-[20px] py-[7px] font-medium rounded-full transition ease-in-out duration-200 ${
                  activeSection === "pictures"
                    ? "text-white bg-white/10"
                    : "hover:bg-white/10"
                }`}
              >
                Pictures
              </Link>
              <Link
                href="/blog/videos"
                onClick={() => setActiveSection("videos")}
                className={`px-[20px] py-[7px] font-medium rounded-full transition ease-in-out duration-200 ${
                  activeSection === "videos"
                    ? "text-white bg-white/10"
                    : "hover:bg-white/10"
                }`}
              >
                Videos
              </Link>
              {/* Open/Close filter menu */}
              <div className="relative">
                <button
                  ref={filterButtonRef}
                  onClick={toggleFilterMenu}
                  className="flex items-center gap-[10px] px-[20px] py-[7px] font-medium rounded-full hover:bg-white/10 transition ease-in-out duration-200"
                >
                  <span>Filters</span>
                  <Image
                    src={ArrowIcon}
                    alt="Arrow"
                    height={11}
                    className={`transform transition-transform duration-300 ease-in-out ${
                      isFilterMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden min-[1000px]:block w-[100px]"></div>
        </div>
      </div>
    </>
  );
};

export default BlogNavbar;
