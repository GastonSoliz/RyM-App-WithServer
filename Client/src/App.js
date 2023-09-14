import { useEffect, useState } from "react";
import { removeFav } from "./redux/actions";
import "./App.css";
import axios from "axios";
import Nav from "./components/Nav.jsx";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";
import Home from "./views/Home.jsx";
import Form from "./views/Form.jsx";
import ErrorPage from "./views/ErrorPage.jsx";
import Favorites from "./views/Favorites.jsx";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  async function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    try {
      const { data } = await axios.get(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.log({ message: error.message });
    }
  }

  function logout() {
    setAccess(false);
  }

  async function onSearch(id) {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      setCharacters((oldChars) => [...oldChars, data]);
    } catch {
      window.alert("¡No hay personajes con este ID!");
    }
  }

  function onClose(id) {
    const arr = characters.filter((ch) => Number(id) !== ch.id);
    dispatch(removeFav(id));
    setCharacters(arr);
  }

  function random() {
    let memoria = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      onSearch(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} logout={logout} randomize={random} />
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
