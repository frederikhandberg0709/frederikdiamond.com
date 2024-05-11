// "use client";

// import { useState } from "react";

// export default function Header() {
//   const [hovered, setHovered] = useState<string | null>(null);

//   const handleMouseEnter = (id: string) => () => {
//     setHovered(id);
//   };

//   const handleMouseLeave = () => {
//     setHovered(null);
//   };

//   const textColor = `rgba(242, 243, 244, ${hovered ? 0.3 : 1})`;

//   return (
//     <div className="flex justify-center w-full">
//       <header className="flex flex-col items-center gap-[20px] h-[100vh] z-10">
//         {/* <h1 className="mt-[250px] z-10 text-[25px] text-center leading-[45px]"> */}
//         <h1
//           className="mt-[250px] z-10 text-[25px] text-center leading-[45px]"
//           style={{ color: textColor }}
//         >
//           Building {/* <div className="relative inline-block"> */}
//           {/* <span
//               className="absolute inset-0 z-10 font-bold hover:opacity-100 opacity-0 transition-opacity duration-300"
//               style={{
//                 color: hovered === 'products' ? 'rgba(242, 243, 244, 1)' : 'rgba(242, 243, 244, 0)', // Only visible when hovered
//                 transition: 'color 0.3s ease'
//               }}
//               onMouseEnter={handleMouseEnter("products")}
//               onMouseLeave={handleMouseLeave}
//             >
//               software products
//             </span> */}
//           <span
//             className="font-bold"
//             style={{
//               color:
//                 hovered === "products" ? "rgba(242, 243, 244, 1)" : textColor,
//             }}
//             data-emoji="💻 🚀"
//           >
//             software products
//           </span>{" "}
//           {/* </div>{" "} */}
//           while studying for a degree in{" "}
//           {/* <span className="font-bold emoji-hover" data-emoji="📚 🏫"> */}
//           {/* <div className="relative inline-block"> */}
//           {/* <span
//               className={`absolute inset-0 z-10 font-bold hover:opacity-100 opacity-0 transition-opacity duration-300 ${
//                 hovered === "engineering" ? "opacity-100" : ""
//               }`}
//               onMouseEnter={handleMouseEnter("engineering")}
//               onMouseLeave={handleMouseLeave}
//             >
//               Software Engineering
//             </span> */}
//           <span
//             className="font-bold"
//             style={{
//               color:
//                 hovered === "engineering"
//                   ? "rgba(242, 243, 244, 1)"
//                   : textColor,
//             }}
//             data-emoji="📚 🏫"
//           >
//             Software Engineering
//           </span>
//           {/* </div>{" "} */}
//           <br />
//           and working freelance as a{" "}
//           {/* <span className="font-bold emoji-hover" data-emoji="📷 🎥"> */}
//           {/* <div className="relative inline-block"> */}
//           <span
//             className="font-bold"
//             style={{
//               color:
//                 hovered === "photographer"
//                   ? "rgba(242, 243, 244, 1)"
//                   : textColor,
//             }}
//             data-emoji="📷 🎥"
//           >
//             news photographer
//           </span>
//           {/* <span
//               className={`absolute inset-0 font-bold hover:opacity-100 opacity-0 transition-opacity duration-300 ${
//                 hovered === "photographer" ? "opacity-100" : ""
//               }`}
//               onMouseEnter={handleMouseEnter("photographer")}
//               onMouseLeave={handleMouseLeave}
//             >
//               news photographer
//             </span> */}
//           {/* </div> */}.
//         </h1>
//       </header>

//       <style jsx>{`
//         // .emoji-hover[data-emoji]::after {
//         //   content: attr(data-emoji);
//         //   position: absolute;
//         //   left: 50%;
//         //   top: 0;
//         //   transform: translate(-50%, -120%);
//         //   font-size: larger;
//         //   white-space: nowrap;
//         //   opacity: 0;
//         //   transition: opacity 0.3s ease, transform 0.3s ease;
//         //   pointer-events: none;
//         // }
//         // .emoji-hover[data-emoji]:hover::after {
//         //   opacity: 1; // Full visibility on hover
//         //   transform: translate(-50%, -100%); // Move to final position
//         // }
//         // .emoji-hover {
//         //   position: relative;
//         // }

//         .emoji-hover::after {
//           content: attr(data-emoji);
//           position: absolute;
//           left: 50%;
//           top: 0;
//           transform: translate(-50%, -100%);
//           font-size: larger;
//           white-space: nowrap;
//           opacity: 0;
//           transition: opacity 0.3s ease, transform 0.3s ease;
//         }
//         .emoji-hover:hover::after {
//           opacity: 1;
//           transform: translate(-50%, -100%);
//         }
//         .emoji-hover:hover::after {
//           opacity: 1;
//         }
//         .opaque,
//         .emoji-hover {
//           position: relative;
//         }

//         .opacity-low {
//           opacity: 0.3;
//         }
//         .opaque {
//           opacity: 1;
//         }
//         .emoji-hover,
//         .opaque {
//           position: relative;
//         }
//       `}</style>
//     </div>
//   );
// }

import { useState } from "react";

export default function Header() {
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
          className="mt-[250px] z-10 text-[25px] text-center leading-[45px] transition-color duration-300"
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
