let initialState = {
  allCharacters: [],
  myFavorites: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    // case "ADD_FAV":
    //   return {
    //     ...state,
    //     myFavorites: [...state.myFavorites, action.payload],
    //     allCharacters: [...state.myFavorites, action.payload],
    //   };
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    // case "REMOVE_FAV":
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter(
    //       (character) => character.id !== Number(action.payload)
    //     ),
    //     allCharacters: state.allCharacters.filter(
    //       (character) => character.id !== Number(action.payload)
    //     ),
    //   };
    case "REMOVE_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case "FILTER":
      const filter = state.allCharacters.filter(
        (character) => character.gender === action.payload
      );
      return { ...state, myFavorites: filter };
    case "ORDER":
      let ordenado;
      if (action.payload === "Ascendente") {
        ordenado = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        ordenado = state.myFavorites.sort((a, b) => (a.id < b.id ? 1 : -1));
      }
      return { ...state, myFavorites: [...ordenado] };
    case "RESET":
      return { ...state, myFavorites: state.allCharacters };
    default:
      return state;
  }
}
