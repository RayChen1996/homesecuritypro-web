import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#BAE5FF",
          200: "#70C0EF",
          300: "#1E4E6C",
        },
        accent: {
          orange: "#ED9C5A",
          green: "#24948E",
        },
        background: "#EEF0F3",
        white: {
          DEFAULT: "#FAFAFA",
          dark: "#131313",
        },
        gray: {
          100: "#EDEDED",
          200: "#D1D1D1",
          300: "#B6B6B6",
          400: "#919191",
          500: "#626262",
          600: "#3A3A3A",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
