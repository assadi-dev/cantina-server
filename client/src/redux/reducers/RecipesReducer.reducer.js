import React from "react";
import {
  FIND_ONE_RECIPES,
  LOAD_DATA,
  RETRIEVE_ALL_RECIPES,
} from "../types/Recipes.type";

const initialState = {
  all: [],
  serchTerm: "",
  filtered: [],
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
    default:
      return state;
  }
};

export default RecipesReducer;
