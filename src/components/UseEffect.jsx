import React, { useEffect, useState } from "react";

const UseEffect = () => {
  let [time, setTime] = useState(getTime());
  let [title, setTitle] = useState("Hello use effect");

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
    </div>
  );
};

export default UseEffect;
