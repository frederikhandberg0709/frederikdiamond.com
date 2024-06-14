"use client";

import { useState } from "react";
import BlogNavbar from "./BlogNavbar";

interface LayoutProps {
  children: React.ReactNode;
}

const sections = ["timeline", "articles", "pictures", "videos"];

// export default function Layout({ children }) {
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState("timeline");
  const [direction, setDirection] = useState(0);
  const [filterType, setFilterType] = useState<string>("all");

  const handleSetActiveSection = (section: string) => {
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = sections.indexOf(section);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveSection(section);
  };

  return (
    <>
      <BlogNavbar
        setActiveSection={handleSetActiveSection}
        setFilterType={setFilterType}
        activeSection={activeSection}
      />
      <main>{children}</main>
    </>
  );
};

export default Layout;
