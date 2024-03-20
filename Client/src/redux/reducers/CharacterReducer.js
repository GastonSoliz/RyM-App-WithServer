let initialState = {
  allCharacters: [],
  charactersCarrousel: [],
  myFavorites: [],
  favoritesFilter: [],
  msjCh: "",
};

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CHAR_REQUEST":
      return {
        ...state,
        msjCh: action.payload,
      };
    case "GET_CHAR_SUCCESS":
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        msjCh: "Solicitud exitosa",
      };
    case "GET_CHAR_FAILURE":
      return {
        ...state,
        msjCh: action.payload,
      };
    case "GET_5CHAR":
      return {
        ...state,
        charactersCarrousel: action.payload,
      };
    case "GET_FAVS":
      return {
        ...state,
        myFavorites: action.payload,
        favoritesFilter: action.payload,
      };

    case "REMOVE_CHAR":
      return {
        ...state,
        allCharacters: state.allCharacters.filter(
          (ch) => ch.id !== action.payload
        ),
      };
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case "REMOVE_FAV":
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (ch) => ch.id !== action.payload.id
        ),
      };

    case "GENDER":
      return {
        ...state,
        favoritesFilter: state.myFavorites.filter(
          (ch) => ch.gender === action.payload
        ),
      };
    case "ORDER":
      let ordenado;
      if (action.payload === "Ascendente") {
        ordenado = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        ordenado = state.myFavorites.sort((a, b) => (a.id < b.id ? 1 : -1));
      }
      return { ...state, favoritesFilter: [...ordenado] };
    case "RESET":
      return { ...state, favoritesFilter: state.myFavorites };
    default:
      return state;
  }
}
