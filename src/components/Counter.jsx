import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  let [step, setStep] = useState(1);

  let handleCount = (type) => {
    switch (type) {
      case "+":
        setCount((prevCount) => prevCount + step);
        break;
      case "-":
        setCount((prevCount) => prevCount - step);
        break;
      default:
        setCount(0);
        setStep(1);
        break;
    }
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h3>Count: {count}</h3>
      <label>Step: </label>
      <input
        onChange={(event) => setStep(Number(event.target.value))}
        value={step}
        type="number"
      />
      <br /> <br />
      <button onClick={() => handleCount("+")}>increment</button>
      <button onClick={() => handleCount("-")}>de-increment</button>
      <button onClick={() => handleCount(0)}>reset</button>
    </div>
  );
};

export default Counter;
