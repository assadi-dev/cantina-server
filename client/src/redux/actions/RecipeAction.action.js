import Api from "../../service/Api";
import {
  FIND_ONE_RECIPES,
  LOAD_DATA,
  RETRIEVE_ALL_RECIPES,
} from "../types/Recipes.type";

export const getAllRecipes = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOAD_DATA, payload: [] });
      Api.get("/recipes").then((res) => {
        let data = res.data;
        dispatch({ type: RETRIEVE_ALL_RECIPES, payload: data });
      });
    } catch (error) {}
  };
};

export const findOneRecipes = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOAD_DATA, payload: [] });

      Api.get("/recipes/" + id).then((res) => {
        let data = res.data;
        dispatch({ type: FIND_ONE_RECIPES, payload: data });
      });
    } catch (error) {}
  };
};
