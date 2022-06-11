import React from "react";
import { Logo } from "../assets/Icons";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <ThemeToggle />
    </header>
  );
};

export default Header;
