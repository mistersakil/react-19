import React from "react";

const Event = () => {
  const handelClickEvent = (event) => console.log(event);
  return (
    <>
      <h1>Event</h1>
      <hr />
      <h3>method handler</h3>
      <button onClick={handelClickEvent}>click me</button>
      <h3>inline handler</h3>
      <button onClick={(event) => handelClickEvent(event)}>click me 2</button>
    </>
  );
};

export default Event;
