import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get5Char, getCharById } from "../redux/actions/characterActions";
import { useEffect, useState } from "react";
import style from "./carrousel.module.css";

export default function Carrousel() {
  const dispatch = useDispatch();
  const characters = useSelector(
    (state) => state.characterReducer.charactersCarrousel
  );

  const [selectIndex, setSelectedIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const prev = () => {
    const nextIndex = selectIndex > 0 ? selectIndex - 1 : characters.length - 1;
    setSelectedIndex(nextIndex);
    setAutoplay(false);
  };

  const next = () => {
    const nextIndex = selectIndex < characters.length - 1 ? selectIndex + 1 : 0;
    setSelectedIndex(nextIndex);
    setAutoplay(false);
  };

  const handleIndicatorClick = (index) => {
    setSelectedIndex(index);
    setAutoplay(false);
  };

  function handleSearch(id) {
    dispatch(getCharById(id));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoplay) {
        const nextIndex =
          selectIndex < characters.length - 1 ? selectIndex + 1 : 0;
        setSelectedIndex(nextIndex);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, characters, selectIndex]);

  useEffect(() => {
    dispatch(get5Char());
  }, []);

  //console.log("carrousel:", characters);
  return (
    <div className={style.carrouselContainer}>
      <div className={style.imageContainer}>
        <button onClick={prev} className={style.buttonsCarrousel}>
          {"<"}
        </button>
        <div className={style.centeredImage}>
          <img
            src={characters[selectIndex]?.image}
            alt={characters[selectIndex]?.name}
          />
          <div className={style.indicatorsContainer}>
            {characters.map((_, index) => (
              <span
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`${style.indicator} ${
                  index === selectIndex ? style.active : ""
                }`}
              ></span>
            ))}
          </div>
        </div>
        <div className={style.carrouselText}>
          <h2>Name:</h2>
          <h2>{characters[selectIndex].name}</h2>
          <button
            onClick={() => handleSearch(characters[selectIndex].id)}
            className={style.buttonText}
          >
            AGREGAR
          </button>
          <Link to={`/detail/${characters[selectIndex].id}`}>
            <button className={style.buttonText}>MAS INFO</button>
          </Link>
        </div>

        <button onClick={next} className={style.buttonsCarrousel}>
          {">"}
        </button>
      </div>
    </div>
  );
}
