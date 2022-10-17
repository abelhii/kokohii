/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'koko-black': "#2f2f2f",
        'koko-white': "#e5e5e5",
      },
    },
    fontFamily: {
      header: ["ui-sans", "Bosch"],
      primary: ["ui-serif", "NeueMontreal"],
    },
  },
  plugins: [],
};
