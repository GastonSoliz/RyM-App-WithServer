import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards.jsx";
import { filterCards, orderCards, reset } from "../redux/actions.js";

export default function Favorites() {
  const dispatch = useDispatch();

  const myFavorites = useSelector((state) => state.myFavorites);

  function HandleOrder(e) {
    dispatch(orderCards(e.target.value));
  }

  function HandleFilter(e) {
    dispatch(filterCards(e.target.value));
  }

  function HandleReset() {
    dispatch(reset());
  }

  return (
    <div>
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
      <Cards characters={myFavorites} />
    </div>
  );
}
