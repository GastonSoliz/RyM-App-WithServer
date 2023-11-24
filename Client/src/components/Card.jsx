import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import style from "./card.module.css";
import {
  postFav,
  removeChar,
  removeFav,
} from "../redux/actions/characterActions";

export default function Card({ character, onClose }) {
  const [isFav, setIsFav] = useState(false);
  const user = useSelector((state) => state.userReducer.user);
  const myFavorites = useSelector(
    (state) => state.characterReducer.myFavorites
  );
  const [ch, setCh] = useState({ ...character, idUser: user.id });
  const location = useLocation();

  const dispatch = useDispatch();

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(character.id));
    } else {
      setIsFav(true);
      console.log("LE MANDO: ", ch);
      dispatch(postFav(ch));
    }
  }

  useEffect(() => {
    const isCharacterInFavorites = myFavorites.some(
      (fav) => fav.id === character.id
    );
    setIsFav(isCharacterInFavorites);
  }, [myFavorites, character]);

  function handleClose(id) {
    dispatch(removeChar(id));
  }
  return (
    <div className={style.cardContainer}>
      {location.pathname !== "/favorites" && (
        <button
          className={style.closeButton}
          onClick={() => {
            handleClose(character.id);
          }}
        >
          X
        </button>
      )}
      <div className={style.name}>
        <h2>Name: {character.name}</h2>
        {isFav ? (
          <button className={style.favoriteButton} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={style.favoriteButton} onClick={handleFavorite}>
            🤍
          </button>
        )}
      </div>

      <div className={style.imageContainer}>
        <img src={character.image} className={style.characterImage} alt="" />
      </div>
      <div className={style.infoCard}>
        <h2>Status: {character.status}</h2>
        <h2>Species:{character.species}</h2>
        <h2>Gender: {character.gender}</h2>
        <h2>Origin: {character.origin}</h2>
        <Link to={`/detail/${character.id}`}>
          <h2>Mas info</h2>
        </Link>
      </div>
    </div>
  );
}
