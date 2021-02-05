import "./Components.css";
import React from "react";

const Credits = (props) => {
  return (
    <div
      className="Credits"
      style={{ userSelect: "none" }}
      onClick={(e) => window.open("https://github.com/mkiisoft", "_blank")}
    >
      <img
        src="https://cdn.worldvectorlogo.com/logos/github-icon.svg"
        width="30px"
        height="30px"
      />
      <div className="Space" />
      <h3 className="CreditsName">Mariano Zorrilla</h3>
    </div>
  );
};

export default Credits;
