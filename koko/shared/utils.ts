import { Theme } from "./types";

export let theme = Theme.dark;

function setTheme() {
  if (
    localStorage.theme === Theme.dark ||
    (!("theme" in localStorage) &&
      window.matchMedia(`(prefers-color-scheme: ${Theme.dark})`).matches)
  ) {
    document.documentElement.classList.add(Theme.dark);
  } else {
    document.documentElement.classList.remove(Theme.light);
  }
}

export function toggleTheme() {
  setTheme();

  if (localStorage.theme == Theme.dark) {
    localStorage.theme = Theme.light;
  } else {
    localStorage.theme = Theme.dark;
  }

  theme = localStorage.theme;
  console.log(localStorage.theme);
  console.log(document.documentElement.classList);
}
