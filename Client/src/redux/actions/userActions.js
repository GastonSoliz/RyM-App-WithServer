import axios from "axios";

//const endpoint = "http://localhost:3001/rickandmorty"
const endpoint =
  "https://rickandmortyserver-gastonsoliz.onrender.com/rickandmorty";

export function getUser(userData) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${endpoint}/login?email=${userData.email}&password=${userData.password}`
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
  return async (dispatch) => {
    dispatch({ type: "POST_USER_REQUEST", payload: "Solicitud en proceso" });
    try {
      const { data } = await axios.post(`${endpoint}/login`, userData);
      dispatch({ type: "POST_USER_SUCCESS", payload: "Solicitud Exitosa" });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        dispatch({
          type: "POST_USER_FAILURE",
          payload: "Ya existe un usuario con este email",
        });
      } else {
        dispatch({
          type: "POST_USER_FAILURE",
          payload: "Error en la solicitud",
        });
      }
    }
  };
}

export function changeAccess(state) {
  return { type: "CHANGE_ACCESS", payload: state };
}
