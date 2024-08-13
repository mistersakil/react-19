import React, { useState } from "react";

const Form = () => {
  const defaultUser = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  let [user, setUser] = useState(defaultUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((preValue) => ({ ...preValue, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <h1>Registration Form in react</h1>
      <hr />

      <form
        onSubmit={handleFormSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <div>
          <label htmlFor="firstName">first name: </label>
          <input
            value={user.firstName}
            onChange={handleInputChange}
            type="text"
            id="firstName"
            name="firstName"
          />
        </div>

        <div>
          <label htmlFor="lastName">last name: </label>
          <input
            value={user.lastName}
            onChange={handleInputChange}
            type="text"
            id="lastName"
            name="lastName"
          />
        </div>

        <div>
          <label htmlFor="email">email: </label>
          <input
            value={user.email}
            onChange={handleInputChange}
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div>
          <label htmlFor="password">password: </label>
          <input
            value={user.password}
            onChange={handleInputChange}
            type="password"
            id="password"
            name="password"
          />
        </div>

        <div>
          <button type="submit" id="submit" name="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
