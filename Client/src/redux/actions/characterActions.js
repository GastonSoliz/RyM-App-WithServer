import axios from "axios";

//const endpoint = "http://localhost:3001/rickandmorty";
const endpoint =
  "https://rickandmortyserver-gastonsoliz.onrender.com/rickandmorty";

export function getCharById(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpoint}/character/${id}`);
      return dispatch({ type: "GET_CHAR", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function get5Char() {
  return async (dispatch) => {
    dispatch({ type: "GET_5CHAR_REQUEST", payload: "Solicitud en proceso" });
    try {
      const { data } = await axios.get(`${endpoint}/characters`);
      return dispatch({ type: "GET_5CHAR_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_5CHAR_FAILURE", payload: "Error en la solicitud" });
    }
  };
}

export function removeChar(id) {
  return { type: "REMOVE_CHAR", payload: id };
}

export function getFav(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpoint}/fav/${id}`);
      return dispatch({ type: "GET_FAVS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postFav(character) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `${endpoint}/fav/${character.idUser}`,
        character
      );
      return dispatch({ type: "ADD_FAV", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeFav(id) {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({ type: "REMOVE_FAV", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterGender(gender) {
  return { type: "GENDER", payload: gender };
}

export function filterOrder(orden) {
  return { type: "ORDER", payload: orden };
}

export function reset() {
  return { type: "RESET" };
}
