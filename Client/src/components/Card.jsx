import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import style from "./card.module.css";
import {
  postFav,
  removeChar,
  removeFav,
} from "../redux/actions/characterActions";

export default function Card({ character, handleWarning }) {
  const [isFav, setIsFav] = useState(false);
  const user = useSelector((state) => state.userReducer.user);
  const access = useSelector((state) => state.userReducer.access);

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
        <h2>{character.name}</h2>
        {access === "guest" ? (
          <button className={style.favoriteButton} onClick={handleWarning}>
            🤍
          </button>
        ) : isFav ? (
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
        <h2>Origin: {character.origin}</h2>
        <Link to={`/detail/${character.id}`}>
          <h2>Mas info</h2>
        </Link>
      </div>
    </div>
  );
}
