import axios from "axios";

export function getUser(userData) {
  const endpoint = "http://localhost:3001/rickandmorty/login";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${endpoint}?email=${userData.email}&password=${userData.password}`
      );
      return dispatch({
        type: "GET_USER",
        payload: { user: data, success: true },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postUser(userData) {
  const endpoint = "http://localhost:3001/rickandmorty/login";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, userData);
      return dispatch({ type: "POST_USER", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function changeAccess(state) {
  return { type: "CHANGE_ACCESS", payload: state };
}
