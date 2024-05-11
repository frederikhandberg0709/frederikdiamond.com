export default function Header() {
  return (
    <div className="flex justify-center w-full">
      <header className="flex flex-col items-center gap-[20px] h-[100vh] z-10">
        <h1 className="mt-[250px] z-10 text-[25px] text-center leading-[45px]">
          Building{" "}
          <span className="font-bold emoji-hover" data-emoji="💻 🚀">
            software products
          </span>{" "}
          while studying for a degree in{" "}
          <span className="font-bold emoji-hover" data-emoji="📚 🏫">
            Software Engineering
          </span>{" "}
          <br />
          and working freelance as a{" "}
          <span className="font-bold emoji-hover" data-emoji="📷 🎥">
            news photographer
          </span>
          .
        </h1>
      </header>

      <style jsx>{`
        .emoji-hover[data-emoji]::after {
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
        .emoji-hover[data-emoji]:hover::after {
          opacity: 1; // Full visibility on hover
          transform: translate(-50%, -100%); // Move to final position
        }
        .emoji-hover {
          position: relative;
        }
      `}</style>
    </div>
  );
}
