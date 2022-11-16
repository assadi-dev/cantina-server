import React from "react";
import { LOAD_DATA, RETRIEVE_ALL_RECIPES } from "../types/Recipes.type";

const initialState = { all: [], serchTerm: "", filtered: [], isReady: false };

const RecipesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_DATA:
      return { ...state, all: payload, isReady: false };
    case RETRIEVE_ALL_RECIPES:
      return { ...state, all: payload, isReady: true };
    default:
      return state;
  }
};

export default RecipesReducer;
