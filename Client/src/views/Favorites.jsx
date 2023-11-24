import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards.jsx";

import style from "./favorites.module.css";
import { useEffect } from "react";
import {
  filterGender,
  filterOrder,
  getFav,
  reset,
} from "../redux/actions/characterActions.js";

export default function Favorites() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    dispatch(getFav(user.id));
  }, [dispatch]);

  const myFavorites = useSelector(
    (state) => state.characterReducer.favoritesFilter
  );

  function HandleOrder(e) {
    dispatch(filterOrder(e.target.value));
  }

  function HandleGender(e) {
    dispatch(filterGender(e.target.value));
  }

  function HandleReset() {
    dispatch(reset());
  }

  return (
    <div className={style.container}>
      <div className={style.filters}>
        <select onChange={HandleOrder}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={HandleGender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        <button onClick={HandleReset}>RESET</button>
      </div>
      {Array.isArray(myFavorites) && myFavorites.length > 0 ? (
        <Cards characters={myFavorites} />
      ) : (
        <p>
          No hay favoritos,quiza tenes que agregarlos yendo al Home, o estas
          jugando con los filtros y no en este caso no hay...
        </p>
      )}
    </div>
  );
}
