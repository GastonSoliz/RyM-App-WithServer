import React, { useEffect, useState } from "react";
import validate from "../utils/validation.js";
import style from "./form.module.css";
import {
  changeAccess,
  getUser,
  postUser,
} from "../redux/actions/userActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [form, setForm] = useState("register");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const access = useSelector((state) => state.userReducer.access);
  const userState = useSelector((state) => state.userReducer.user);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [userRegister, setUserRegister] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChangeLogin(event) {
    setUserLogin({ ...userLogin, [event.target.name]: event.target.value });
  }

  function handleChangeRegister(event) {
    setUserRegister({
      ...userRegister,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({ ...userLogin, [event.target.name]: event.target.value })
    );
  }

  useEffect(() => {
    if (access !== "false") {
      navigate("/home");
    }
  }, [access, userState]);

  function handleLogin(event) {
    event.preventDefault();
    dispatch(getUser(userLogin)).then((response) => {
      if (response && response.payload.success) {
        dispatch(changeAccess("user"));
      }
    });
  }

  function handlePost(event) {
    event.preventDefault();
    dispatch(postUser(userRegister));
  }

  function handleForm(state) {
    setForm(() => state);
  }

  function handleGuest(event) {
    dispatch(changeAccess("guest"));
  }

  return (
    <div className={style.container}>
      <div className={style.welcome}>
        <div className={style.message}>
          <h2>BIENVENIDO A MI APP RICK&MORTY</h2>
          <p>
            Este es un proyecto que extrae informacion de la API{" "}
            <a href="https://rickandmortyapi.com/" target="blank">
              Rick and Morty
            </a>{" "}
            y se muestran aquellos que conozcas por ID, tambien ya que se inicia
            sesion hay un apartado para guardar tus personajes favoritos!
          </p>
          {form === "register" ? (
            <div>
              <p>Si ya tienes una cuenta, logueate!</p>
              <button onClick={() => handleForm("login")}>
                Iniciar sesion
              </button>
            </div>
          ) : (
            <div>
              <p>Si no tienes una cuenta todavia, registrate!</p>
              <button onClick={() => handleForm("register")}>Registrate</button>
            </div>
          )}
        </div>
        <div className={style.guestContainer}>
          <p>Puedes entrar tambien como invitado con ciertas limitaciones!</p>
          <button onClick={() => handleGuest()}>Entra como invitado!</button>
        </div>
      </div>
      {form === "register" ? (
        <form onSubmit={handlePost} className={style.form}>
          <h2>REGISTRATE!</h2>
          <div>
            <label>EMAIL:</label>
            <input
              name="email"
              placeholder="Ingrese su email..."
              type="text"
              onChange={handleChangeRegister}
            />
            <span>{errors.email}</span>
          </div>
          <div>
            <label>PASSWORD:</label>
            <input
              name="password"
              placeholder="Ingrese su contraseña"
              type="text"
              onChange={handleChangeRegister}
            />
            <span>{errors.password}</span>
          </div>
          <button type="submit">CREA TU USUARIO!</button>
        </form>
      ) : (
        <form onSubmit={handleLogin} className={style.form}>
          <h2>INGRESAR USUARIO</h2>
          <label>EMAIL:</label>
          <div>
            <input
              name="email"
              placeholder="Ingrese su email..."
              type="text"
              onChange={handleChangeLogin}
            />
          </div>
          <div>
            <label>PASSWORD:</label>
            <input
              name="password"
              placeholder="Ingrese su contraseña"
              type="text"
              onChange={handleChangeLogin}
            />
          </div>
          <button type="submit">ENTRA!</button>
        </form>
      )}
    </div>
  );
}
