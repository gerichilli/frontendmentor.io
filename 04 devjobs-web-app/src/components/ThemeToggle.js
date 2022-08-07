import { useEffect } from "react";
import { ReactComponent as IconSun } from "../assets/images/icon-sun.svg";
import { ReactComponent as IconMoon } from "../assets/images/icon-moon.svg";
import useLocalStorage from "../hooks/useLocalStorage";

function ThemeToggle() {
  let initialTheme = "light";

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    initialTheme = "dark";
  }

  const [theme, setTheme] = useLocalStorage(initialTheme, "theme");

  useEffect(() => {
    document.documentElement.className = `theme-${theme}`;
  }, [theme]);

  function changeTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }

  return (
    <div className="flex items-center">
      <IconSun />
      <label
        htmlFor="default-toggle"
        className="inline-flex relative items-center cursor-pointer mx-4"
      >
        <input
          type="checkbox"
          value=""
          id="default-toggle"
          name="themeToggle"
          className="sr-only peer"
          checked={theme === "dark" ? true : false}
          onChange={changeTheme}
        />
        <span className="block w-12 h-6 bg-white peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:bg-primary-100 after:content-[''] after:absolute after:top-[5px] after:left-[5px] after:rounded-full after:h-3.5 after:w-3.5 after:bg-primary after:transition-all"></span>
        <span className="sr-only">Toggle Theme</span>
      </label>
      <IconMoon />
    </div>
  );
}

export default ThemeToggle;
