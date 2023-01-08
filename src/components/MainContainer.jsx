import React from "react";
import Description from "./Description";
import HeroImg from "./HeroImg";

const MainContainer = () => {
  return (
    <div className="flex flex-row justify-between  ">
      <Description />
      <HeroImg />
    </div>
  );
};

export default MainContainer;
