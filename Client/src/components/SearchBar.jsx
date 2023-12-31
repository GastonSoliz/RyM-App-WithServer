import { useState } from "react";
import style from "./searchbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCharById } from "../redux/actions/characterActions";

export default function SearchBar() {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const allCharacters = useSelector(
    (state) => state.characterReducer.allCharacters
  );

  console.log("SEARCH_BAR:", allCharacters);

  function handleChange(event) {
    event.preventDefault();
    setId(event.target.value);
  }

  function handleSearch(id) {
    dispatch(getCharById(id));
  }

  function handleRandom() {
    let memoria = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      handleSearch(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }

  return (
    <div className={style.searchbarContainer}>
      <button onClick={handleRandom}>AGREGAR ALEATORIO</button>
      <input
        placeholder="Ingresar un ID..."
        type="search"
        value={id}
        onChange={handleChange}
      />
      <button onClick={() => handleSearch(id)}>AGREGAR</button>
    </div>
  );
}
