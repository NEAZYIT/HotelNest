import type { Config } from "tailwindcss";
const {fontFamily} = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#038C7F",
        secondary: "#F2C641",
        tertiary: {
          dark: "#000000",  // Black
          light: "#E5E5E5",  // Lighter Gray
          yellow: "#DAB303", // Yellow
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
