import React, { useRef } from "react";

const UseRefHook = () => {
  let username = useRef("");

  console.log(username);

  const submit = (event) => {
    event.preventDefault();
    console.log(username.current.value);
  };
  return (
    <div>
      <h1>Use Ref Hook</h1>
      <hr />

      <input ref={username} placeholder="username" type="text" />
      <br />
      <br />
      <button onClick={submit}>submit</button>
    </div>
  );
};

export default UseRefHook;
