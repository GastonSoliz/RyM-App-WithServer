import React from "react";
import Cards from "../components/Cards.jsx";

export default function Home({ characters, onClose }) {
  return (
    <div>
      <h1>PAGINA HOME</h1>
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}
