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
        "color-border": '#3b3b3b',
        "color-navbar-hover": "#121212",
        "color-main": "#0A0A0A"
      },
     
    },
  },
  plugins: [],
};
export default config;
