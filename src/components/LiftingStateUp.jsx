import React, { useState } from "react";

const LiftingStateUp = () => {
  let [inputValue, setInputValue] = useState("");
  return (
    <>
      <h1>LiftingStateUp</h1>
      <InputComponent
        inputValue={inputValue}
        setInputValue={setInputValue}
        type="text"
        label="name"
      />
      <InputComponent
        inputValue={inputValue}
        setInputValue={setInputValue}
        type="email"
        label="email"
      />
    </>
  );
};

export default LiftingStateUp;

const InputComponent = ({ inputValue, setInputValue, label, type }) => {
  return (
    <>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type={type ? type : "text"}
        placeholder={label}
      />
      <h4>insert and show: {inputValue}</h4>
    </>
  );
};
