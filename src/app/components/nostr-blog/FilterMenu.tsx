import React, { MutableRefObject, useEffect, useRef, useState } from "react";

interface FilterMenuProps {
  position: { top: number; left: number } | null;
  isOpen: boolean;
  closeMenu: () => void;
  setFilterType: (type: string) => void;
  // selectedTopics: string[];
  // selectedContentTypes: string[];
  // toggleContentType: (type: string) => void;
  // toggleTopic: (topic: string) => void;
  // resetContentTypes: () => void;
  // resetSelectedTopics: () => void;
  filterButtonRef: MutableRefObject<HTMLButtonElement | null>;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
  position,
  isOpen,
  closeMenu,
  setFilterType,
  // selectedTopics,
  // selectedContentTypes,
  // toggleContentType,
  // toggleTopic,
  // resetContentTypes,
  // resetSelectedTopics,
  filterButtonRef,
}) => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedContentTypes, setSelectedContentTypes] = useState<string[]>(
    []
  );
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

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        filterButtonRef.current &&
        !filterButtonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeMenu, filterButtonRef]);

  if (!isOpen || !position) return null;

  return (
    <div
      ref={menuRef}
      className="fixed z-[98] w-[300px] h-auto rounded-2xl bg-black/50 backdrop-blur-xl p-[15px] border border-white/10"
      style={{
        top: position.top + 20,
        left: position.left,
        transform: "translate(-50%, 0)",
      }}
      onClick={(e) => e.stopPropagation()}
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
  );
};

export default FilterMenu;
