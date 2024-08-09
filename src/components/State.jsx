import { useState } from "react";

const State = () => {
  let [count, setCount] = useState(0);

  let handleCount = () => {
    setCount(() => count + 1);
  };

  let defaultUsers = [
    { name: "sakil", age: 30 },
    { name: "rasel", age: 40 },
    { name: "monir", age: 50 },
  ];

  setInterval(() => {
    setUsers(() => {
      return [...users, { name: "jalil", age: 45 }];
    });
  }, 5000);
  let [users, setUsers] = useState(defaultUsers);

  const avgAge =
    users.reduce((total, user) => {
      return total + user.age;
    }, 0) / users.length;
  return (
    <>
      <h1>State</h1>
      <hr />
      <button onClick={handleCount}>count ({count})</button>

      <h2>users using state</h2>

      {users.map((user, index) => {
        return <li key={index}>{user.name}</li>;
      })}

      <h2>without derived state</h2>
      <h4>total users: {users.length}</h4>

      <h2>with derived state or computed property </h2>
      <h4>avg age: {avgAge}</h4>
    </>
  );
};

export default State;
