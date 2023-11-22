import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards.jsx";

import style from "./favorites.module.css";
import { useEffect } from "react";
import { getFav } from "../redux/actions/characterActions.js";

export default function Favorites() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  console.log("DATOS DEL USUARIO:", user);

  useEffect(() => {
    dispatch(getFav(user.id));
  }, [dispatch]);

  const myFavorites = useSelector(
    (state) => state.characterReducer.myFavorites
  );
  console.log("COMO QUEDA LOS FAVORITOS:", myFavorites);
  function HandleOrder(e) {
    // dispatch(orderCards(e.target.value));
  }

  function HandleFilter(e) {
    //dispatch(filterCards(e.target.value));
  }

  function HandleReset() {
    //dispatch(reset());
  }

  return (
    <div className={style.container}>
      <select onChange={HandleOrder}>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      <select onChange={HandleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <button onClick={HandleReset}>RESET</button>
      {Array.isArray(myFavorites) && myFavorites.length > 0 ? (
        <Cards characters={myFavorites} />
      ) : (
        <p>No hay favoritos</p>
      )}
    </div>
  );
}
