import { useEffect, useState } from "react";
import colormix from "public/color_mix.svg";
import Image from "next/image";

export default function HeaderSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => () => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  // Define a base color for text
  const textColor = `rgba(242, 243, 244, ${hovered ? 0.3 : 1})`;

  return (
    <div className="flex justify-center w-full">
      <header className="flex flex-col items-center gap-[20px] h-[100vh] z-10">
        <h1
          className="mt-[300px] sm:mt-[500px] mx-[10px] z-10 text-[25px] text-center leading-[45px] transition-color duration-300"
          style={{ color: textColor }}
        >
          Building{" "}
          <div className="relative inline-block">
            <span
              className="font-bold transition-color duration-300 emoji-hover"
              style={{
                color:
                  hovered === "products" ? "rgba(242, 243, 244, 1)" : textColor,
              }}
              data-emoji="💻 🚀"
              onMouseEnter={handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              software products
            </span>
          </div>{" "}
          while studying for a degree in{" "}
          <div className="relative inline-block">
            <span
              className="font-bold transition-color duration-300 emoji-hover"
              style={{
                color:
                  hovered === "engineering"
                    ? "rgba(242, 243, 244, 1)"
                    : textColor,
              }}
              data-emoji="📚 🏫"
              onMouseEnter={handleMouseEnter("engineering")}
              onMouseLeave={handleMouseLeave}
            >
              Software Engineering
            </span>
          </div>
          <br /> and working freelance as a{" "}
          <div className="relative inline-block">
            <span
              className="font-bold transition-color duration-300 emoji-hover"
              style={{
                color:
                  hovered === "photographer"
                    ? "rgba(242, 243, 244, 1)"
                    : textColor,
              }}
              data-emoji="📷 🎥"
              onMouseEnter={handleMouseEnter("photographer")}
              onMouseLeave={handleMouseLeave}
            >
              news photographer
            </span>
          </div>
          .
        </h1>
      </header>

      <style jsx>{`
        .emoji-hover::after {
          content: attr(data-emoji);
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%, -120%);
          font-size: larger;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
          pointer-events: none;
        }
        .emoji-hover:hover::after {
          opacity: 1;
          transform: translate(-50%, -100%);
        }
      `}</style>
    </div>
  );
}
