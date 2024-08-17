import React, { useContext } from "react";
import Child from "./Child";
import { ContextApi } from "../ContextApiComponent";

const Parent = () => {
  const { handelCount } = useContext(ContextApi);
  return (
    <div>
      <h3>Parent component</h3>
      <p>Change context api component counter value</p>
      <button onClick={() => handelCount("+", 5)}>increment</button> &nbsp;
      <button onClick={() => handelCount("-", 5)}>decrement</button> &nbsp;
      <button onClick={() => handelCount("0")}>reset</button> &nbsp;
      <Child />
    </div>
  );
};

export default Parent;
