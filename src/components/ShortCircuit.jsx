import React, { useState } from "react";

const ShortCircuit = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [name, setName] = useState("sakil");
  return (
    <>
      <h1>ShortCircuit</h1>
      <hr />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>login</button>
      {isLoggedIn || <h4>Welcome guest</h4>}
      {isLoggedIn && (
        <>
          <p>You are successfully logged in</p>
          <h4>Welcome {name}</h4>
        </>
      )}
    </>
  );
};

export default ShortCircuit;
