import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,ts,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        typewriter: "typewriter 1s steps(11) forwards",
        caret:
          "typewriter 1s steps(11) forwards, blink 1s steps(11) infinite 2s",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },

          "50%": {
            opacity: "1",
          },

          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
