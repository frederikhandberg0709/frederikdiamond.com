"use client";

import React, { ReactNode, useState } from "react";
import { TooltipTop } from "./Tooltip";

interface PostActionButtonProps {
  tooltipText: string;
  count: number; // for the count number displayed next to the button
  children: ReactNode; // for the content inside the button like SVGs
  bgColorOnHover: string; // background color on hover
  bgColorOnActive: string; // background color on active
}

const PostActionButtonsComponent: React.FC<PostActionButtonProps> = ({
  tooltipText,
  count,
  children,
  bgColorOnHover,
  bgColorOnActive,
}) => {
  // Initial state for background color style
  const [bgStyle, setBgStyle] = useState({});

  // Convert hex color to RGBA format
  const hexToRGBA = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Handlers for mouse events to change the background style
  const handleMouseEnter = () => {
    setBgStyle({
      backgroundColor: hexToRGBA(bgColorOnHover, 0.25), // 25% opacity on hover
    });
  };

  const handleMouseLeave = () => {
    setBgStyle({}); // Revert to default on mouse leave
  };

  const handleMouseDown = () => {
    setBgStyle({
      backgroundColor: hexToRGBA(bgColorOnActive, 0.5), // 50% opacity on active/click
    });
  };

  const handleMouseUp = () => {
    setBgStyle({
      backgroundColor: hexToRGBA(bgColorOnHover, 0.25), // Revert to 25% opacity on mouse up
    });
  };

  return (
    <TooltipTop text={tooltipText}>
      <div
        className="flex items-center justify-center gap-[5px] w-[90px] py-[3px] rounded-full cursor-pointer transition-colors duration-200"
        style={bgStyle} // Apply the dynamic background style
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {children}
        <span className="select-none">{count}</span> {/* Display the count */}
      </div>
    </TooltipTop>
  );
};

export default PostActionButtonsComponent;
