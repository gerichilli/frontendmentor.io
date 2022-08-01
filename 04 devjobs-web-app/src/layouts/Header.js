import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import ThemeToggle from "../components/ThemeToggle";

const Header = () => {
  return (
    <header className="h-34 sm:h-40 pb-10 bg-no-repeat bg-cover bg-left-bottom flex items-center header-bg">
      <div className="container px-5 lg:px-10 max-w-6xl">
        <div className="flex items-center justify-between">
          <Link to="/" aria-label="Go to homepage" className="mr-4">
            <Logo aria-hidden={true} />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
