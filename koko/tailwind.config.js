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
        'koko-dark': "#3B413C",
        'koko-light': "#C4D3D1",
        'project-dark': "#2F2F2F",
        'project-light': "#E5E5E5",
      },
    },
    fontFamily: {
      header: ["ui-sans", "Bosch"],
      primary: ["ui-serif", "NeueMontreal"],
    },
  },
  plugins: [],
};
