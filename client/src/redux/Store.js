import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
