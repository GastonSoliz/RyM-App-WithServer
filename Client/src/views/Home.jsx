import React from "react";
import Cards from "../components/Cards.jsx";
import style from "./home.module.css";

export default function Home({ characters, onClose }) {
  return (
    <div className={style.container}>
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}
