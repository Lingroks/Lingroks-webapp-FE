import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter-regular': ['var(--font-inter-regular)'],
        'inter-medium': ['var(--font-inter-medium)'],
        'inter-bold': ['var(--font-inter-bold)'],
        'sans-light': ['var(--font-source-sans-light)'],
        'sans-bold': ['var(--font-source-sans-bold)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
