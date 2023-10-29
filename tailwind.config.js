/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6BB67D", // Muted green for financial elements
        "primary-light": "#C4D6B0", // Lighter shade of green
        neutral: "#A0AEC0", // Neutral gray or light blue for professionalism
        "neutral-light": "#e6ecf0", // Lighter shade of neutral color
      },
      fontFamily: {
        sans: ["var(--font-lora)"],
        mono: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
};
