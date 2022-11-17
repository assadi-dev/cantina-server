import React from "react";
import FloatingLabel from "../../components/Input/FloatingLabel";
import {
  FormInputControl,
  FormRecipeContainer,
  HeaderFormPreview,
  HeaderFormRecipes,
  IngredientForm,
} from "./FormRecipe.styled";
import IngredientInput from "./IngredientInput";

const AddRecipe = () => {
  return (
    <FormRecipeContainer>
      <h2>Nouvelle recette</h2>
      <HeaderFormRecipes>
        <div className="col-left">
          <FormInputControl>
            <FloatingLabel label="Titre" />
          </FormInputControl>
          <FormInputControl>
            <FloatingLabel label="Description" />
          </FormInputControl>
          <FormInputControl>
            <FloatingLabel label="Difficulté" />
          </FormInputControl>
        </div>
        <div className="col-right">
          <HeaderFormPreview></HeaderFormPreview>
        </div>
      </HeaderFormRecipes>
      <IngredientForm>
        <h3>Ingredients</h3>
        <IngredientInput />
      </IngredientForm>
    </FormRecipeContainer>
  );
};

export default AddRecipe;
