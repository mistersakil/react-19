import React from "react";

const students = [
  { id: 1, name: "sakil" },
  { id: 2, name: "rasel" },
];

const studentsMap = students.map((item) => {
  return <li key={item.id}>{item.name}</li>;
});

const Loops = () => {
  return (
    <>
      <h2>Loops</h2>
      <hr />
      <ul>{studentsMap}</ul>
    </>
  );
};

export default Loops;
