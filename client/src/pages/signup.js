import React, { useState } from "react";
import { ADD_USER } from "../utils/mutation";
import { useMutation } from "@apollo/react-hooks";
function Signup() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="">
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First name"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last name"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="email">Email:</label>
          <input
            placeholder=""
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder=""
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;