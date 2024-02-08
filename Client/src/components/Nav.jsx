import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeAccess } from "../redux/actions/userActions.js";
import insigniaImg from "../assets/insignia.png";
import Alert from "./Alert.jsx";

export default function Nav() {
  const access = useSelector((state) => state.userReducer.access);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (access === "false") {
      navigate("/");
    }
  }, [access]);

  function logout() {
    dispatch(changeAccess("false"));
  }

  function handleWarning() {
    setWarning(true);
    setTimeout(() => {
      setWarning(false);
    }, 2000);
  }

  return (
    <div className={style.navContainer}>
      <div className={style.navBar_left}>
        <img src={insigniaImg} alt="insignia" />
      </div>
      <div className={style.navBar_right}>
        <Link to="/home">
          <button>Inicio</button>
        </Link>
        {access === "guest" ? (
          <button onClick={handleWarning}>Favoritos</button>
        ) : (
          <Link to="/favorites">
            <button>Favoritos</button>
          </Link>
        )}
        {/* <Link to="/about">
          <button>Sobre mi</button>
        </Link> */}
        {access === "user" ? (
          <button className={style.navBar_right} onClick={logout}>
            Cerrar sesion
          </button>
        ) : (
          <button onClick={logout}>Iniciar sesión</button>
        )}
      </div>
      {warning && <Alert />}
    </div>
  );
}
