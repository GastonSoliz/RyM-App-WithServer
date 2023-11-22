import React, { useEffect } from "react";
import SearchBar from "./SearchBar.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeAccess } from "../redux/actions/userActions.js";
import insigniaImg from "../assets/insignia.png";

export default function Nav() {
  const access = useSelector((state) => state.userReducer.access);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("ACCESS DEL NAVBAR:", access);
    !access && navigate("/");
  }, [access, navigate]);

  const location = useLocation();

  function logout() {
    dispatch(changeAccess(false));
  }

  return (
    <div className={style.navContainer}>
      <div className={style.navBar_left}>
        <img src={insigniaImg} alt="insignia" />
      </div>

      {location.pathname !== "/favorites" && (
        <>
          <SearchBar />
        </>
      )}

      <div className={style.navBar_right}>
        <Link to="/home">
          <button>Inicio</button>
        </Link>
        <Link to="/favorites">
          <button>Favoritos</button>
        </Link>
        <Link to="/about">
          <button>Sobre mi</button>
        </Link>
        <button className={style.navBar_right} onClick={logout}>
          Cerrar sesion
        </button>
      </div>
    </div>
  );
}
