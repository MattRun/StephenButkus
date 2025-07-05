import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./dashboard/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./leadcourses/**/*.{js,ts,jsx,tsx,mdx}", // Add any additional folders here
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Saira", "sans-serif"], // Set Saira as default font
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1D4ED8", // Example of adding custom colors if needed
      },
      spacing: {
        '128': '32rem', // Example for adding extra spacing utilities
      },
    },
  },
  darkMode: "class", // Ensure dark mode is correctly implemented
  plugins: [nextui()], // Add additional plugins if required
};

export default config;
