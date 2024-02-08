const initialState = {
  user: [],
  access: "false",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "POST_USER":
      return { ...state };
    case "GET_USER":
      return { ...state, user: action.payload.user };
    case "CHANGE_ACCESS":
      return { ...state, access: action.payload };
    default:
      return state;
  }
}
