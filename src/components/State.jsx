import { useState } from "react";

const State = () => {
  let [count, setCount] = useState(0);

  let handleCount = () => {
    setCount(() => count + 1);
  };
  return (
    <>
      <h1>State</h1>
      <hr />
      <button onClick={handleCount}>count ({count})</button>
    </>
  );
};

export default State;
