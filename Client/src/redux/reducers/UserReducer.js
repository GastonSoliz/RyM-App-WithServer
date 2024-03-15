const initialState = {
  user: [],
  access: "false",
  msj: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "POST_USER_SUCCESS":
      return { ...state, msj: action.payload };
    case "POST_USER_REQUEST":
      return { ...state, msj: action.payload };
    case "POST_USER_FAILURE":
      return { ...state, msj: action.payload };
    case "GET_USER":
      return { ...state, user: action.payload.user };
    case "CHANGE_ACCESS":
      return { ...state, access: action.payload };
    default:
      return state;
  }
}
