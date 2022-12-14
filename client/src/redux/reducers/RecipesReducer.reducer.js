import React from "react";
import {
  ADD_RECIPE,
  DELETE_RECIPE,
  UPDATE_RECIPE,
  FIND_ONE_RECIPES,
  LOAD_DATA,
  RETRIEVE_ALL_RECIPES,
  FILTER_RECIPE,
  SEARCH_RECIPE,
} from "../types/Recipes.type";

const initialState = {
  all: [],
  serchTerm: "",
  selected: null,
  isReady: false,
};

const RecipesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_DATA:
      return { ...state, isReady: false };
    case RETRIEVE_ALL_RECIPES:
      return { ...state, all: payload, isReady: true };
    case FIND_ONE_RECIPES:
      return { ...state, selected: payload, isReady: true };
    case ADD_RECIPE:
      return { ...state, all: [...state.all, payload], isReady: true };
    case DELETE_RECIPE:
      let removedRecipe = state.all.filter((recipe) => recipe.id != payload.id);
      return { ...state, all: removedRecipe, isReady: true };
    case UPDATE_RECIPE:
      let updatedRecipe = state.all.map((recipe) => {
        if (recipe.id == payload.id) {
          return payload;
        }
        return recipe;
      });
      return { ...state, all: updatedRecipe, isReady: true };

    case FILTER_RECIPE:
      return { ...state, all: payload, isReady: true };
    case SEARCH_RECIPE:
      let searchResult = [];
      searchResult = payload.term
        ? payload.all.filter((recipe) =>
            recipe.titre.toLowerCase().includes(payload.term.toLowerCase())
          )
        : payload.all;

      return { ...state, all: searchResult, isReady: true };

    default:
      return state;
  }
};

export default RecipesReducer;
