"use client";

import { useRef, useState } from "react";
import BlogNavbar from "../components/nostr-blog/BlogNavbar";
import FilterMenu from "../components/nostr-blog/FilterMenu";

interface LayoutProps {
  children: React.ReactNode;
}

const sections = ["timeline", "articles", "pictures", "videos"];

// export default function Layout({ children }) {
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState("timeline");
  const [direction, setDirection] = useState(0);
  const [filterType, setFilterType] = useState<string>("all");
  const [filterMenuPosition, setFilterMenuPosition] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const filterButtonRef = useRef<HTMLButtonElement>(null);

  const handleSetActiveSection = (section: string) => {
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = sections.indexOf(section);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveSection(section);
  };

  const handleFilterButtonClick = (position: {
    top: number;
    left: number;
    width: number;
  }) => {
    setFilterMenuPosition(position);
    setIsFilterMenuOpen((prev) => !prev);
  };

  const closeFilterMenu = () => {
    setIsFilterMenuOpen(false);
  };

  return (
    <>
      <BlogNavbar
        setActiveSection={handleSetActiveSection}
        setFilterType={setFilterType}
        activeSection={activeSection}
        onFilterButtonClick={handleFilterButtonClick}
        isFilterMenuOpen={isFilterMenuOpen}
        closeFilterMenu={closeFilterMenu}
        filterButtonRef={filterButtonRef}
      />
      <FilterMenu
        position={filterMenuPosition}
        isOpen={isFilterMenuOpen}
        closeMenu={closeFilterMenu}
        setFilterType={setFilterType}
        // selectedTopics={[]}
        // selectedContentTypes={[]}
        // toggleContentType={() => {}}
        // toggleTopic={() => {}}
        // resetContentTypes={() => {}}
        // resetSelectedTopics={() => {}}
        filterButtonRef={filterButtonRef}
      />
      <main>{children}</main>
    </>
  );
};

export default Layout;
