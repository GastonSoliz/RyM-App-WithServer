import React from "react";
import SearchBar from "./SearchBar.jsx";
import { Link, useLocation } from "react-router-dom";
import style from "./nav.module.css";

export default function Nav({ onSearch, logout, randomize }) {
  const location = useLocation();

  return (
    <div className={style.navContainer}>
      <div className={style.navBar_left}>
        <Link to="/about">
          <button>ABOUT</button>
        </Link>
        <Link to="/home">
          <button>HOME</button>
        </Link>
        <Link to="/favorites">
          <button>FAVORITES</button>
        </Link>
      </div>

      {location.pathname !== "/favorites" && (
        <>
          <button onClick={randomize}>ADD RANDOM</button>
          <SearchBar onSearch={onSearch} />
        </>
      )}

      <button className={style.navBar_right} onClick={logout}>
        LOG OUT
      </button>
    </div>
  );
}
