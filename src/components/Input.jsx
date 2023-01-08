import React, { useState } from "react";
import Arrow from "../images/icon-arrow.svg";
import validator from "validator";

const Input = () => {
  const [emailError, setEmailError] = useState("");
  // const [emailIsEmpty, setEmailIsEmpty] = useState("");

  // const validate = () => {
  //   return emailIsEmpty.length;
  // };

  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  return (
    <div className="flex flex-row pb-6  ">
      <form name="contact" action="/contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <input
          className="focus:outline-none w-[25rem] h-12 rounded-full text-center border-2 border-red-400"
          type="email"
          required
          placeholder="Email address"
          onChange={(e) => validateEmail(e)}
          // onBlur={(e) => setEmailIsEmpty(e.target.value)}
        />
        <button
          // disabled={!validate()}
          className="fixed left-[480px] w-20 h-12 bg-red-400 rounded-full text-center border-2 border-red-400 "
        >
          <img className="pl-8" src={Arrow} alt="arrow" />
        </button>
        <p className="pt-5">{emailError}</p>
      </form>
    </div>
  );
};

export default Input;
