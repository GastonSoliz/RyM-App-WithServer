import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./detail.module.css";

export default function Detail() {
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  //const endpoint = "http://localhost:3001/rickandmorty"
  const endpoint =
    "https://rickandmortyserver-gastonsoliz.onrender.com/rickandmorty";

  useEffect(() => {
    axios(`${endpoint}/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  console.log(character);

  if (!{ character }) {
    return <h1>PAGINA DETAIL</h1>;
  } else {
    return (
      <div className={style.detailContainer}>
        <div className={style.imageContainer}>
          <img src={character.image} className={style.characterImage} alt="" />
        </div>
        <div className={style.infoCard}>
          <h2>Name: {character.name}</h2>
          <h2>Status: {character.status}</h2>
          <h2>Species: {character.species}</h2>
          <h2>Gender: {character.gender}</h2>
          <h2>Origin: {character.origin}</h2>
        </div>
      </div>
    );
  }
}
