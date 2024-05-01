import React from "react";
import "./Project.css";
import foto from "../assets/2396-6.jpg";

import Slider from "../slider/Slider";
const Project = () => {
  return (
    <>
      <div className="image-bg">
        <img id="mainimg" src={foto} alt="intro" />
        <div id="empty-background"></div>
      </div>

      <Slider />
    </>
  );
};

export default Project;
