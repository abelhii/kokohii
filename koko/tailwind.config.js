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
        "koko-dark": "#3B413C",
        "koko-light": "#C4D3D1",
        "project-dark": "#2F2F2F",
        "project-light": "#E5E5E5",
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translate3D(0px, 100%, 0px)" },
          "50%": { transform: "translate3D(0px, 0%, 0px)" },
          "100%": { transform: "translate3D(0px, -100%, 0px)" },
        },
      },
      animation: {
        "slide-up": "slide-up 2s ease-in-out",
      },
    },
    fontFamily: {
      header: ["ui-sans", "Bosch"],
      primary: ["ui-serif", "NeueMontreal"],
    },
  },
  plugins: [],
};
