import React from "react";
import Cards from "../components/Cards.jsx";
import style from "./home.module.css";
import { useSelector } from "react-redux";
import Carrousel from "../components/Carrousel.jsx";
import SearchBar from "../components/SearchBar.jsx";

export default function Home() {
  const characters = useSelector(
    (state) => state.characterReducer.allCharacters
  );

  return (
    <div className={style.container}>
      <div className={style.viewTop}>
        <h1>Descubre a los personajes de Rick and Morty!</h1>
        <div className={style.bottomBox}>
          <h4>Mas de 800 personajes!</h4>
          <h4>Alrededor de 100 ubicaciones!</h4>
          <h4>Actualmente con 51 episodios!</h4>
        </div>
      </div>
      <Carrousel />
      <SearchBar />
      <Cards characters={characters} />
    </div>
  );
}
