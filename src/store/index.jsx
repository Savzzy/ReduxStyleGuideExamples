import { createStore } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const initialStore = {
  toDoItems: [],
};

export const store = createStore(
  rootReducer,
  initialStore,
  composeWithDevTools()
);
