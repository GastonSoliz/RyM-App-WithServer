import React from "react";
import Cards from "../components/Cards.jsx";
import style from "./home.module.css";
import { useSelector } from "react-redux";
import Carrousel from "../components/Carrousel.jsx";

export default function Home({ onClose }) {
  const characters = useSelector(
    (state) => state.characterReducer.allCharacters
  );
  return (
    <div className={style.container}>
      <Carrousel />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}
