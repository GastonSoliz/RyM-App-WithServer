import React, { useState } from "react";
import validate from "../utils/validation.js";
import style from "./form.module.css";

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
    for (let error in errors)
      if (errors[error] !== "") {
        return true;
      }

    return false;
  }

  return (
    <div className={style.container}>
      <div className={style.welcome}>
        <div className={style.mensaje}>
          <h2>BIENVENIDO A MI APP RICK&MORTY</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            doloremque quisquam repudiandae fuga blanditiis architecto nesciunt
            ipsa ratione, accusantium, dolor porro exercitationem? Illum
            doloremque quos sequi, sit incidunt explicabo sint!
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={style.form}>
        <h2>INGRESAR USUARIO</h2>
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
    </div>
  );
}
