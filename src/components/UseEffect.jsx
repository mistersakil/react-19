import React, { useEffect, useState } from "react";

const UseEffect = () => {
  let [time, setTime] = useState(getTime());
  let [title, setTitle] = useState("Hello use effect");
  let [count, setCount] = useState(0);

  function getTime() {
    return new Date().toLocaleTimeString();
  }

  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 1000);
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    let countInterval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(countInterval);
  }, []);

  return (
    <div>
      <h1>Digital clock: Use Effect Hook</h1> <hr />
      <h3>Time: {time}</h3>
      <div>
        <label htmlFor="changeMetaTitle">Change meta title: </label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          name="changeMetaTitle"
          id="changeMetaTitle"
        />
      </div>
      <div>
        <h3>Auto count: {count}</h3>
      </div>
    </div>
  );
};

export default UseEffect;
