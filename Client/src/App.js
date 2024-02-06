import "./App.css";
import Nav from "./components/Nav.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";
import Home from "./views/Home.jsx";
import Form from "./views/Form.jsx";
import ErrorPage from "./views/ErrorPage.jsx";
import Favorites from "./views/Favorites.jsx";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
