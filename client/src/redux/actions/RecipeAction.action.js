import Api from "../../service/Api";
import {
  ADD_RECIPE,
  DELETE_RECIPE,
  FILTER_RECIPE,
  FIND_ONE_RECIPES,
  LOAD_DATA,
  RETRIEVE_ALL_RECIPES,
  SEARCH_RECIPE,
  UPDATE_RECIPE,
} from "../types/Recipes.type";

export const LoadData = () => {
  return async (dispatch) => {
    new Promise((resolve) => {
      dispatch({ type: LOAD_DATA });
      resolve("Chargemen en cours");
    });
  };
};

export const getAllRecipes = () => {
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        dispatch({ type: LOAD_DATA });
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
        dispatch({ type: LOAD_DATA });
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

export const filtered_recipes = ({ niveau, personnes, tempsPreparation }) => {
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        let filteredRecipes = [];
        Api.get("/recipes")
          .then((res) => {
            let allRecipes = res.data;

            filteredRecipes = allRecipes.filter((recipe) =>
              recipe.niveau.includes(niveau)
            );

            if (personnes.start || personnes.end) {
              filteredRecipes = filteredRecipes.filter(
                (recipe) =>
                  recipe.personnes >= personnes.start &&
                  recipe.personnes <= personnes.end
              );
            }

            if (tempsPreparation.start || tempsPreparation.end) {
              filteredRecipes = filteredRecipes.filter(
                (recipe) =>
                  recipe.tempsPreparation >= tempsPreparation.start &&
                  recipe.tempsPreparation <= tempsPreparation.end
              );
            }

            dispatch({ type: FILTER_RECIPE, payload: filteredRecipes });

            resolve(filteredRecipes);
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

export const searchRecipes = (term) => {
  return async (dispatch) => {
    term.length > 0
      ? dispatch({ type: SEARCH_RECIPE, payload: { term } })
      : dispatch(getAllRecipes());
  };
};
