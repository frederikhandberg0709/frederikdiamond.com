import Image from "next/image";
import Link from "next/link";
import "./styling.css";
import ArrowIcon from "/public/arrow-icon.svg";
import { useEffect, useRef, useState } from "react";

interface NavbarProps {
  setActiveSection: (section: string) => void;
  setFilterType: (type: string) => void;
  activeSection: string;
}

const BlogNavbar: React.FC<NavbarProps> = ({
  setActiveSection,
  setFilterType,
  activeSection,
}) => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedContentTypes, setSelectedContentTypes] = useState<string[]>(
    []
  );
  const filterMenuRef = useRef<HTMLDivElement>(null);
  const filterButtonRef = useRef<HTMLButtonElement>(null);

  const toggleFilterMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsFilterMenuOpen((prevState) => !prevState);
  };

  const contentTypes = ["Text", "Picture", "Video"];

  const topics = [
    "Technology",
    "Health",
    "Finance",
    "Education",
    "Travel",
    "Food",
    "Lifestyle",
    "Entertainment",
    "Science",
    "Sports",
  ];

  const toggleContentType = (type: string) => {
    if (selectedContentTypes.includes(type)) {
      setSelectedContentTypes(selectedContentTypes.filter((t) => t !== type));
    } else {
      setSelectedContentTypes([...selectedContentTypes, type]);
    }
    setFilterType(type); // TESTING
  };

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const resetContentTypes = () => {
    setSelectedContentTypes([]);
    setFilterType("all"); // TESTING
  };

  const resetSelectedTopics = () => {
    setSelectedTopics([]);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      filterMenuRef.current &&
      !filterMenuRef.current.contains(event.target as Node) &&
      filterButtonRef.current &&
      !filterButtonRef.current.contains(event.target as Node)
    ) {
      setIsFilterMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isFilterMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFilterMenuOpen]);

  return (
    <>
      <div className="fixed z-[99] top-0 left-0 right-0 flex justify-center w-full">
        <div className="flex justify-between w-[80%] pt-[10px]">
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
              <button
                // className="px-[20px] py-[7px] font-medium rounded-full hover:bg-white/10 transition ease-in-out duration-200"
                className={`px-[20px] py-[7px] font-medium rounded-full transition ease-in-out duration-200 ${
                  activeSection === "timeline"
                    ? "text-white bg-white/10"
                    : "hover:bg-white/10"
                }`}
                onClick={() => setActiveSection("timeline")}
              >
                Timeline
              </button>
              <button
                // className="px-[20px] py-[7px] font-medium rounded-full hover:bg-white/10 transition ease-in-out duration-200"
                className={`px-[20px] py-[7px] font-medium rounded-full transition ease-in-out duration-200 ${
                  activeSection === "articles"
                    ? "text-white bg-white/10"
                    : "hover:bg-white/10"
                }`}
                onClick={() => setActiveSection("articles")}
              >
                Articles
              </button>
              <button
                //   href="/pictures"
                className={`px-[20px] py-[7px] font-medium rounded-full transition ease-in-out duration-200 ${
                  activeSection === "pictures"
                    ? "text-white bg-white/10"
                    : "hover:bg-white/10"
                }`}
                onClick={() => setActiveSection("pictures")}
              >
                Pictures
              </button>
              <button
                className={`px-[20px] py-[7px] font-medium rounded-full transition ease-in-out duration-200 ${
                  activeSection === "videos"
                    ? "text-white bg-white/10"
                    : "hover:bg-white/10"
                }`}
                onClick={() => setActiveSection("videos")}
              >
                Videos
              </button>
              {/* Open/Close filter menu */}
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
          <div></div>
        </div>
      </div>
      {/* Filter menu */}
      {isFilterMenuOpen && (
        <div
          ref={filterMenuRef}
          className="fixed z-[98] top-[75px] w-[300px] h-auto rounded-2xl bg-black/50 backdrop-blur-xl p-[15px] border border-white/10"
        >
          <div>
            <div className="flex justify-between">
              <h3 className="font-semibold">Content Type</h3>
              <button
                disabled={selectedContentTypes.length === 0}
                onClick={resetContentTypes}
                className={`text-right text-blue-400 ${
                  selectedContentTypes.length === 0
                    ? "opacity-50 cursor-default"
                    : "opacity-100 hover:text-blue-500 hover:underline"
                }`}
              >
                Reset
              </button>
            </div>
            <div className="flex gap-[10px] mt-[10px] flex-wrap">
              {contentTypes.map((type) => (
                <button
                  key={type}
                  className={`px-[10px] py-[5px] rounded-full transition ease-in-out duration-200 ${
                    selectedContentTypes.includes(type)
                      ? "bg-blue-700 text-white"
                      : "bg-transparent text-white/50 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => toggleContentType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-[20px]">
              <h3 className="font-semibold">Topic Selection</h3>
              <button
                onClick={resetSelectedTopics}
                disabled={selectedTopics.length === 0}
                className={`text-right text-blue-400 ${
                  selectedTopics.length === 0
                    ? "opacity-50 cursor-default"
                    : "opacity-100 hover:text-blue-500 hover:underline"
                }`}
              >
                Reset
              </button>
            </div>
            <div className="flex gap-[10px] mt-[10px] flex-wrap">
              {topics.map((topic) => (
                <button
                  key={topic}
                  className={`px-[10px] py-[5px] rounded-full transition ease-in-out duration-200 ${
                    selectedTopics.includes(topic)
                      ? "bg-blue-700 text-white"
                      : "bg-transparent text-white/50 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => toggleTopic(topic)}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogNavbar;
