import React, { useState } from "react";
import GrandParent from "./context/GrandParent";

export const ContextApi = React.createContext(null);

const ContextApiComponent = () => {
  const countInitialState = 0;
  const [count, setCount] = useState(countInitialState);
  const firstName = "sakil";
  const lastName = "mahmud";

  const handelCount = (type, step = 1) => {
    switch (type) {
      case "+":
        setCount((preValue) => preValue + step);
        break;
      case "-":
        setCount((preValue) => preValue - step);
        break;
      default:
        setCount(countInitialState);
        break;
    }
  };

  return (
    <ContextApi.Provider value={{ firstName, lastName, handelCount }}>
      <div>
        <h1>Use of Context API</h1>
        <code>context api will pass some data to its children</code>
        <h4>Value of count: {count}</h4>
        <hr />
        <GrandParent />
      </div>
    </ContextApi.Provider>
  );
};

export default ContextApiComponent;
