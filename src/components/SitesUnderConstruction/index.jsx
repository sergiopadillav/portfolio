import React from "react";
import "./styles.css";
import svg from "../recursos/img.svg";

function Index() {
  return (
    <div className="section">
      <div className="title">
        <h1>This portfolio is in progress ;)</h1>
      </div>
      <div className="img">
        <img src={svg} alt="imagen" />
      </div>
    </div>
  );
}

export default Index;
