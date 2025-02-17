import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Purple
        primaryPurple: "#a855f7",
        selectedPurple: "#6B21A8",
        menuLinkHoverPurple: "#2E0F47",
        darkPurple: "#3B0764",
        // Blue
        primaryBlue: "#3B82F6",
        selectedBlue: "#1E40AF",
        darkBlue: "#172554",
        // Gray
        primaryGray: "#151515",
        hoverGray: "#151515",
        textGray: "#6B7280",
        darkGray: "#121212",
        veryDarkGray: "#090909",

        success: "#22C55E",
        warning: "#EAB308",
        alert: "#EF4444",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    textFillColor: (theme: any) => theme("borderColor"),
    textStrokeColor: (theme: any) => theme("borderColor"),
    textStrokeWidth: (theme: any) => theme("borderWidth"),
    paintOrder: {
      fsm: { paintOrder: "fill stroke markers" },
      fms: { paintOrder: "fill markers stroke" },
      sfm: { paintOrder: "stroke fill markers" },
      smf: { paintOrder: "stroke markers fill" },
      mfs: { paintOrder: "markers fill stroke" },
      msf: { paintOrder: "markers stroke fill" },
    },
  },
  variants: {
    textFillColor: ["responsive"],
    textStrokeColor: ["responsive"],
    textStrokeWidth: ["responsive"],
    paintOrder: ["responsive"],
  },
  plugins: [require("tailwindcss/nesting")],
  // plugins: [require("tailwindcss-text-fill-stroke")()],
};
export default config;
