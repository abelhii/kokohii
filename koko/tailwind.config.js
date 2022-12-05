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
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "50%, 70%": { transform: "translateY(0%)", opacity: 1 },
          "100%": {transform: "translateY(-100%)", opacity: 0}
        },
      },
      animation: {
        "slide-up": "slide-up 2.5s cubic-bezier(0.25, 0.05, 0.55, 1.25) forwards",
      },
    },
    fontFamily: {
      header: ["ui-sans", "Bosch"],
      primary: ["ui-serif", "NeueMontreal"],
    },
  },
  plugins: [],
};
