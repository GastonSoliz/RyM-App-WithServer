import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import style from "./card.module.css";

export default function Card(prop) {
  const { character, onClose } = prop;

  const [isFav, setIsFav] = useState(false);

  const location = useLocation();

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(character.id));
    } else {
      setIsFav(true);
      dispatch(addFav(character));
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === character.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.cardContainer}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      {location.pathname !== "/favorites" && (
        <button
          onClick={() => {
            onClose(character.id);
          }}
        >
          X
        </button>
      )}
      <div className={style.imageContainer}>
        <img src={character.image} className={style.characterImage} alt="" />
      </div>
      <h2>Name: {character.name}</h2>
      <h2>Status: {character.status}</h2>
      <h2>Species:{character.species}</h2>
      <h2>Gender: {character.gender}</h2>
      <h2>{character.origin.name}</h2>

      <Link to={`/detail/${character.id}`}>
        <button>Mas info</button>
      </Link>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addFav: (character) => dispatch(addFav(character)),
//     removeFav: (id) => dispatch(removeFav(id)),
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// };

//export default connect(mapStateToProps, mapDispatchToProps)(Card);
