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
          "100%": { transform: "translateY(-100%)", opacity: 0 },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)", transformOrigin: "center" },
          "100%": { transform: "rotate(360deg)", transformOrigin: "center" },
        },
        "pulse-outward": {
          "0%, 100%": { transform: "translate3d(-2% ,-4%, 0)", transformOrigin: "center" },
          "50%": { transform: "translate3d(2%, 4%, 0)", transformOrigin: "center" }
        }
      },
      animation: {
        "slide-up":
          "slide-up 2.5s cubic-bezier(0.25, 0.05, 0.55, 1.25) forwards",
        "rotate": "rotate 4s linear infinite",
        "rotate-fast": "rotate 2s linear infinite",
        "pulse-outward": "pulse-outward 2s linear infinite"
      },
    },
    fontFamily: {
      header: ["ui-sans", "Bosch"],
      primary: ["ui-serif", "NeueMontreal"],
    },
  },
  plugins: [],
};
