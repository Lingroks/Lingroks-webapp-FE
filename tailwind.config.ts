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
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        //custom max-width breakpoints
        'max-xs': {'max': '375px'},
        'max-sm': {'max': '640px'},
        'max-md': {'max': '768px'},
        'max-lg': {'max': '1024px'},
        'max-xl': {'max': '1280px'},
        'max-2xl': {'max': '1536px'},
      },
      colors: {
        mainBlue: "#5732E9",
        foreground: "var(--foreground)",
        textGrey: "#646464",
        secondaryGrey: "#969696",
        secondaryBlue: "#3C1BA1",
        inputGrey: "#F4F4F4",
        deepGrey: "#3F3F3F",
      },
    },
  },
  plugins: [],
};
export default config;
