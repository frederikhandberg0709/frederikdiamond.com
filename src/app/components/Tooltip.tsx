"use client";

import React, { FC, ReactElement, useState, useEffect } from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  // The 'topStyle' is optional because of the '?' making it more flexible.
  topStyle?: string;
}

/* Tooltip TOP */
export const TooltipTop: FC<TooltipProps> = ({ text, children, topStyle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (hovering) {
      // Set a timeout to change the visibility state, which triggers the opacity transition
      timeoutId = setTimeout(() => setIsVisible(true), 650); // 1-second delay
    } else {
      // If not hovering, hide tooltip immediately
      setIsVisible(false);
    }

    // Cleanup on unmount or when 'hovering' changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [hovering]); // Dependency array ensures effect runs only when 'hovering' value changes

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  // Dynamic class to control the opacity
  const opacityClass = isVisible ? "opacity-95" : "opacity-0";

  // Tooltip positioning
  const effectiveTopStyle = topStyle ?? "top-[-40px]";

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        className={`absolute z-10 px-[10px] py-[5px] ${effectiveTopStyle} text-center select-none pointer-events-none left-1/2 transform -translate-x-1/2 bg-[#171717] bg-opacity-95 text-white text-[15px] rounded transition-opacity ease-in-out duration-300 ${opacityClass}`}
      >
        {text}
      </div>
    </div>
  );
};

/* Tooltip BOTTOM */
export const TooltipBottom: FC<TooltipProps> = ({
  text,
  children,
  topStyle,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (hovering) {
      // Set a timeout to change the visibility state, which triggers the opacity transition
      timeoutId = setTimeout(() => setIsVisible(true), 650); // 1-second delay
    } else {
      // If not hovering, hide tooltip immediately
      setIsVisible(false);
    }

    // Cleanup on unmount or when 'hovering' changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [hovering]); // Dependency array ensures effect runs only when 'hovering' value changes

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  // Dynamic class to control the opacity
  const opacityClass = isVisible ? "opacity-95" : "opacity-0";

  // Tooltip positioning
  const effectiveTopStyle = topStyle ?? "top-[40px]";

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        className={`absolute z-10 px-[10px] py-[5px] ${effectiveTopStyle} text-center select-none pointer-events-none left-1/2 transform -translate-x-1/2 bg-[#171717] bg-opacity-95 text-white text-[15px] rounded transition-opacity ease-in-out duration-300 ${opacityClass}`}
      >
        {text}
      </div>
    </div>
  );
};
