import React from "react";
import Logo from "../images/logo.svg";
import Input from "./Input";

const Description = () => {
  return (
    <div className="bg-hero_pattern bg-no-repeat bg-auto  pt-10 pl-[10rem] flex flex-col justify-around   ">
      <img className=" w-[15rem]" src={Logo} alt="" />
      <h1 className="text-7xl font-semibold tracking-widest leading-none ">
        <span className="text-neutral-300">We're</span>
        <br /> coming
        <br /> soon
      </h1>
      <p className="text-neutral-300 text-left">
        Hello fellow shoppers! We're currently building our new
        <br />
        fashion store. Add your email below to stay up-to-date with
        <br />
        announcements and our launch deals.
      </p>
      <Input />
    </div>
  );
};

export default Description;
