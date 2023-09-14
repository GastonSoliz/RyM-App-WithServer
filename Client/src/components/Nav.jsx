import React from "react";
import SearchBar from "./SearchBar.jsx";
import { Link, useLocation } from "react-router-dom";

export default function Nav({ onSearch, logout, randomize }) {
  const location = useLocation();

  return (
    <div>
      <div>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/favorites">
          <button>Favorites</button>
        </Link>
        {location.pathname !== "/favorites" && (
          <div>
            <button onClick={randomize}>ADD RANDOM</button>
            <SearchBar onSearch={onSearch} />
          </div>
        )}
        <button onClick={logout}>Log Out</button>
      </div>
    </div>
  );
}
