import { combineReducers } from "redux";
import RecipesReducer from "./reducers/RecipesReducer.reducer";
const RootReducer = combineReducers({ RecipesReducer });

export default RootReducer;
