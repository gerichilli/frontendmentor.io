import React, { useState, useEffect } from "react";
import { IconSun, IconMoon } from "../assets/Icons";

const ThemeToggle = () => {
  let initialTheme = window.matchMedia("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";

  const [theme, setTheme] = useState(initialTheme);
  const nextTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <button
      className="toggle-theme"
      aria-label="Change theme"
      onClick={() => setTheme(nextTheme)}
      type="button"
    >
      <span>{nextTheme}</span>
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </button>
  );
};

export default ThemeToggle;
