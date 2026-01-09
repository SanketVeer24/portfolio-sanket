/* @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#05070c",
        ink: "#0f172a",
        accent: "#fbbf24",
        accentSoft: "#fef3c7"
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        display: ["system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
