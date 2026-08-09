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
        sand: {
          50: "#FDFBF8",
          100: "#FBF9F5", // main background
          200: "#F3EEE6", // plaster background
          300: "#EAE3D7", // tadelakt surface
          400: "#DDD4C5",
          500: "#C9BAA5",
        },
        obsidian: {
          50: "#7A736E",
          100: "#4D4642",
          800: "#2B2623",
          900: "#1A1817", // deep charcoal text
        },
        taupe: {
          500: "#8C837A",
          600: "#6E665E", // muted warm taupe
          700: "#544D46",
        },
        palm: {
          500: "#3F4F41",
          800: "#2E3A2F", // dark leaf green
          900: "#1E271F",
        },
        terracotta: {
          400: "#D48369",
          500: "#C46E52", // muted terracotta
          600: "#A8543A",
        },
        gold: {
          400: "#D4AF37",
          500: "#C59B27",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 10px 30px -10px rgba(26, 24, 23, 0.05)",
        card: "0 15px 35px -15px rgba(46, 58, 47, 0.08)",
        modal: "0 25px 50px -12px rgba(26, 24, 23, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
