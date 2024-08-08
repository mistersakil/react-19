import React from "react";

const Event = () => {
  const handelClickEvent = (event) => {
    console.log(event);
    console.log(event.target);
  };

  const grandParentClick = (event) => {
    console.log("grand parent clicked");
  };
  const parentClick = (event) => {
    console.log("parent clicked");
  };
  const childClick = (event) => {
    console.log(" child clicked");
  };

  const grandParentClick2 = (event) => {
    event.stopPropagation();
    console.log("grand parent clicked");
  };
  const parentClick2 = (event) => {
    event.stopPropagation();
    console.log("parent clicked");
  };
  const childClick2 = (event) => {
    event.stopPropagation();
    console.log(" child clicked");
  };

  const grandParentClick3 = (event) => {
    console.log("grand parent clicked");
  };
  const parentClick3 = (event) => {
    console.log("parent clicked");
  };
  const childClick3 = (event) => {
    console.log(" child clicked");
  };
  return (
    <>
      <h1>Event</h1>
      <hr />
      <h3>Event capturing</h3> <hr />
      <section onClickCapture={grandParentClick3}>
        <h4>grand parent</h4>
        <div onClickCapture={parentClick3}>
          <h5>parent</h5>
          <div onClickCapture={childClick3}>
            <h6>child</h6>
          </div>
        </div>
      </section>
      <h3>Event bubbling stop</h3> <hr />
      <section onClick={grandParentClick2}>
        <h4>grand parent</h4>
        <div onClick={parentClick2}>
          <h5>parent</h5>
          <div onClick={childClick2}>
            <h6>child</h6>
          </div>
        </div>
      </section>
      <h3>method handler</h3>
      <button onClick={handelClickEvent}>click me</button>
      <h3>inline handler</h3>
      <button onClick={(event) => handelClickEvent(event)}>click me 2</button>
      <h3>Event bubbling</h3> <hr />
      <section onClick={grandParentClick}>
        <h1>grand parent</h1>
        <div onClick={parentClick}>
          <h2>parent</h2>
          <div onClick={childClick}>
            <h3>child</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Event;
