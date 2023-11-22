import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import characterReducer from "./reducers/CharacterReducer";
import userReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({ characterReducer, userReducer });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
