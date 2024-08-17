import React from "react";
import Parent from "./Parent";

const GrandParent = () => {
  return (
    <div>
      <h2>Grandparent </h2>
      <Parent />
    </div>
  );
};

export default GrandParent;
