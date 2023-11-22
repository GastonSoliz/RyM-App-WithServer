import React from "react";
import Cards from "../components/Cards.jsx";
import style from "./home.module.css";
import { useSelector } from "react-redux";

export default function Home({ onClose }) {
  const characters = useSelector(
    (state) => state.characterReducer.allCharacters
  );
  return (
    <div className={style.container}>
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}
