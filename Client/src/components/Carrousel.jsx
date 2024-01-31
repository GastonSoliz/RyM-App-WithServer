import { useDispatch, useSelector } from "react-redux";
import { get5Char } from "../redux/actions/characterActions";
import { useEffect, useState } from "react";

export default function Carrousel() {
  const dispatch = useDispatch();
  const characters = useSelector(
    (state) => state.characterReducer.charactersCarrousel
  );

  const currentImage = useState(0);

  useEffect(() => {
    dispatch(get5Char());
  }, [dispatch]);

  return <div></div>;
}
