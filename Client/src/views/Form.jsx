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
import axios from "axios";
import loadingGif from "../assets/loading-gif.gif";

export default function Form() {
  const [form, setForm] = useState("register");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const access = useSelector((state) => state.userReducer.access);
  const userState = useSelector((state) => state.userReducer.user);
  const msj = useSelector((state) => state.userReducer.msj);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [userRegister, setUserRegister] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [warningLogin, setWarningLogin] = useState(false);

  const [disabled, setDisabled] = useState(false);

  function handleChangeLogin(event) {
    setUserLogin({ ...userLogin, [event.target.name]: event.target.value });
  }

  function handleChangeRegister(event) {
    setUserRegister({
      ...userRegister,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({ ...userRegister, [event.target.name]: event.target.value })
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
        setWarningLogin(false);
      } else {
        console.error("CUIDADO PAPI");
        setWarningLogin(true);
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

  function handleGuest() {
    dispatch(changeAccess("guest"));
  }

  useEffect(() => {
    let hasError = false;
    for (let error in errors) {
      if (errors[error] !== "") {
        hasError = true;
        break;
      }
    }
    setDisabled(hasError);
  }, [errors]);

  setInterval(() => {
    //const endpoint = "http://localhost:3001/rickandmorty"
    const endpoint =
      "https://rickandmortyserver-gastonsoliz.onrender.com/rickandmorty";

    const { data } = axios.get(`${endpoint}/character/1`);
  }, 3600 * 1000);

  console.log("esto viene del back: ", msj);
  return (
    <div className={style.container}>
      <div className={style.welcome}>
        <div className={style.message}>
          <h2>BIENVENIDO A MI APP RICK&MORTY</h2>
          <p>
            Este es un proyecto que extrae informacion de la API
            <a href="https://rickandmortyapi.com/" target="blank">
              Rick and Morty
            </a>{" "}
            , se muestran aquellos que conozcas por ID y de manera aleatoria,
            tambien si se inicia sesion hay un apartado para guardar tus
            personajes favoritos!
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
              type="email"
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
          {msj === "Ya existe un usuario con este email" && (
            <>
              <span>Ya existe un usuario con este email</span>
              <button type="submit" disabled={disabled}>
                CREA TU USUARIO!
              </button>
            </>
          )}
          {msj === "Solicitud en proceso" && (
            <img className={style.gifLoading} src={loadingGif} alt="carga" />
          )}
          {msj === "Solicitud Exitosa" && (
            <span className={style.msjSuccess}>
              Se creo el usuario! Puedes ir a iniciar sesion
            </span>
          )}
          {msj === null && (
            <button type="submit" disabled={disabled}>
              CREA TU USUARIO!
            </button>
          )}
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
          {warningLogin && <span>Email o contraseña incorrectas!</span>}
          <button type="submit">ENTRA!</button>
        </form>
      )}
    </div>
  );
}
