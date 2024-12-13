import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#0C0B08",
        gold: "#DCCA87",
        gray: "#AAAAAA",
      },
    },
    fontFamily: {
      cormorant: ["var(--font-cormorant)"],
      sans: ["open-sans"],
    },
  },
  plugins: [],
} satisfies Config;
