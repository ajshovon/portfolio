import type { Config } from "tailwindcss";

// Colors are CSS variables (see src/styles/global.css) so both themes share one set of classes.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,ts,md,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        raised: token("raised"),
        line: token("line"),
        fg: token("fg"),
        muted: token("muted"),
        faint: token("faint"),
        accent: token("accent"),
        "accent-fg": token("accent-fg"),
        ok: token("ok"),
        danger: token("danger"),
        info: token("info"),
      },
      fontFamily: {
        sans: ["var(--font-text)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      animation: {
        blink: "blink 1.1s steps(1) infinite",
        rise: "rise 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) both",
      },
      keyframes: {
        blink: {
          "50%": {
            opacity: "0",
          },
        },
        rise: {
          from: {
            opacity: "0",
            transform: "translateY(12px)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
