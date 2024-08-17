import React, { useContext } from "react";

import { ContextApi } from "../ContextApiComponent";

const Child = () => {
  const { firstName, lastName } = useContext(ContextApi);
  return (
    <div>
      <h4>Child component</h4>
      <code>Show data that passed by context api component</code>
      <p>
        my name is: {firstName} {lastName}
      </p>
    </div>
  );
};

export default Child;
