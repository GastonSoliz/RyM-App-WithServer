import axios from "axios";

export function getCharById(id) {
  const endpoint = `http://localhost:3001/rickandmorty/character/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({ type: "GET_CHAR", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeChar(id) {
  return { type: "REMOVE_CHAR", payload: id };
}

export function getFav(id) {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({ type: "GET_FAVS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postFav(character) {
  console.log("LLEGA AL ACTION ASI: ", character);
  const endpoint = `http://localhost:3001/rickandmorty/fav/${character.idUser}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
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

export function filterCards(gender) {
  return { type: "FILTER", payload: gender };
}

export function orderCards(orden) {
  return { type: "ORDER", payload: orden };
}

export function reset() {
  return { type: "RESET" };
}
