import React, { useEffect, useState } from "react";

const UseEffect = () => {
  let [time, setTime] = useState(getTime());

  function getTime() {
    return new Date().toLocaleTimeString();
  }

  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Digital clock: Use Effect Hook</h1> <hr />
      <h3>Time: {time}</h3>
    </div>
  );
};

export default UseEffect;
