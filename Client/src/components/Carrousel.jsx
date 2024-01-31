import { useDispatch, useSelector } from "react-redux";
import { get5Char } from "../redux/actions/characterActions";
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoplay) {
        // Cambiar automáticamente a la siguiente imagen si el autoplay está habilitado
        const nextIndex =
          selectIndex < characters.length - 1 ? selectIndex + 1 : 0;
        setSelectedIndex(nextIndex);
      }
    }, 2000); // Cambiar cada 2 segundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
  }, [autoplay, characters, selectIndex]);

  useEffect(() => {
    dispatch(get5Char());
  }, []);

  //console.log("carrousel:", characters);
  return (
    <div className={style.carrouselContainer}>
      <button onClick={prev}>{"<"}</button>
      <img
        src={characters[selectIndex]?.image}
        alt={characters[selectIndex]?.name}
      />
      <button onClick={next}>{">"}</button>
      {characters.map((_, index) => (
        <span
          key={index}
          onClick={() => handleIndicatorClick(index)}
          style={{
            display: "inline-block",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: index === selectIndex ? "blue" : "gray",
            margin: "0 5px",
            cursor: "pointer",
          }}
        ></span>
      ))}
    </div>
  );
}
