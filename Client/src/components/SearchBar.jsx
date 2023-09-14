import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setId(event.target.value);
  }

  return (
    <div>
      <input
        placeholder="Ingresar un ID..."
        type="search"
        value={id}
        onChange={handleChange}
      />
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
}
