import React from "react";
import { render } from "react-dom";
import "./style.scss";
import Header from "./components/Header";
import SearchParam from "./components/SearchParam";

const App = () => {
  return (
    <div className="container">
      <Header />
      <SearchParam />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
