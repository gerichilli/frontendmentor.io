import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <a href="/" aria-label="Go to homepage">
          <Logo aria-hidden={true} />
        </a>
      </div>
    </header>
  );
};

export default Header;
