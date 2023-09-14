import React, { useState } from "react";
import validate from "../utils/validation.js";

export default function Form({ login }) {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setuserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validate({ ...userData, [event.target.name]: event.target.value })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }

  function handleDisabled() {
    // let disabled;
    // for (let error in errors) {
    //   if (errors[error] === "") disabled = false;
    //   else {
    //     disabled = true;
    //     break;
    //   }
    // }
    // return disabled;
    for (let error in errors)
      if (errors[error] !== "") {
        return true;
      }

    return false;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>EMAIL:</label>
      <input
        name="email"
        placeholder="Ingrese su email..."
        type="text"
        onChange={handleChange}
      />
      <span>{errors.email}</span>
      <label>PASSWORD:</label>
      <input
        name="password"
        placeholder="Ingrese su contraseña"
        type="text"
        onChange={handleChange}
      />
      <span>{errors.password}</span>
      <button type="submit" disabled={handleDisabled()}>
        SUBMIT
      </button>
    </form>
  );
}
