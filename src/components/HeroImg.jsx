import React from "react";
import Hero from "../images/hero-desktop.jpg";

const HeroImg = () => {
  return (
    <div className="w-1/2 ">
      <img className="w-full h-screen opacity-90" src={Hero} alt="/" />
    </div>
  );
};

export default HeroImg;
