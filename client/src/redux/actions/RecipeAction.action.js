import Api from "../../service/Api";
import {
  ADD_RECIPE,
  DELETE_RECIPE,
  FIND_ONE_RECIPES,
  LOAD_DATA,
  RETRIEVE_ALL_RECIPES,
  UPDATE_RECIPE,
} from "../types/Recipes.type";

export const LoadData = () => {
  return async (dispatch) => {
    new Promise((resolve) => {
      dispatch({ type: RETRIEVE_ALL_RECIPES, payload: [] });
      resolve("Chargemen en cours");
    });
  };
};

export const getAllRecipes = () => {
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        dispatch({ type: LOAD_DATA, payload: [] });
        Api.get("/recipes")
          .then((res) => {
            let data = res.data;
            dispatch({ type: RETRIEVE_ALL_RECIPES, payload: data });
            resolve(data);
          })
          .catch((err) => {
            throw err;
          });
      } catch (error) {
        reject(error);
      }
    });
  };
};

export const findOneRecipes = (id) => {
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        dispatch({ type: LOAD_DATA, payload: [] });

        Api.get("/recipe/" + id)
          .then((res) => {
            let data = res.data;
            dispatch({ type: FIND_ONE_RECIPES, payload: data });
            resolve(data);
          })
          .catch((err) => {
            throw err;
          });
      } catch (error) {
        reject(error);
      }
    });
  };
};

export const addRecipes = (data) => {
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        dispatch({ type: LOAD_DATA, payload: [] });
        Api.post("/recipes", data)
          .then((res) => {
            dispatch({ type: ADD_RECIPE, payload: res.data });
            resolve(data);
          })
          .catch((err) => {
            throw err;
          });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };
};

export const updateRecipes = (id, data) => {
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        dispatch({ type: LOAD_DATA, payload: [] });
        Api.put("/recipe/" + id, data)
          .then((res) => {
            dispatch({ type: UPDATE_RECIPE, payload: res.data });
            resolve(data);
          })
          .catch((err) => {
            throw err;
          });
      } catch (error) {
        if (error.response) {
          console.log("Erreur");
        }
        reject(error);
      }
    });
  };
};

export const removeRecipes = (id) => {
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        Api.delete("/recipe/" + id)
          .then((res) => {
            dispatch({ type: DELETE_RECIPE, payload: { id } });
            resolve(res.data.message);
          })
          .catch((err) => {
            throw err;
          });
      } catch (error) {
        reject(error);
      }
    });
  };
};
