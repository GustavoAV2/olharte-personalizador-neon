import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olharteGreen: "#00F2B1",
        olharteBlue: "#00B7F4",
      },
      backgroundImage: {
        "company-gradient": "linear-gradient(to bottom, #00F2B1, #00B7F4)",
      },
    },
  },
  plugins: [],
};
export default config;
