import React, { useState } from "react";
import { AddIcon } from "../../components/Icons/Icons";
import FloatingLabel from "../../components/Input/FloatingLabel";
import {
  AddElementButton,
  FormInputControl,
  FormRecipeContainer,
  HeaderFormPreview,
  HeaderFormRecipes,
  IconButton,
  SectionForm,
} from "./FormRecipe.styled";
import IngredientInput from "./IngredientInput";
import uniqid from "uniqid";
import EtapeInput from "./EtapeInput";
import { removeItem } from "../../utils/Array";

const AddRecipe = () => {
  const [listIngredient, setListingredient] = useState([]);
  const [listEtapes, setListEtape] = useState([]);

  const addIngredient = () => {
    setListingredient((prevState) => [
      ...prevState,
      { id: uniqid(), qte: 1, unite: "", label: "" },
    ]);
  };
  const addEtapes = () => {
    setListEtape((prevState) => [...prevState, { id: uniqid(), content: "" }]);
  };
  const removeElement = (id, element) => {
    if (element == "etape")
      setListEtape(() => removeItem(listEtapes, "id", id));
    if (element == "ingredient")
      setListingredient(() => removeItem(listIngredient, "id", id));
  };

  const handleChangeEtape = (id, data) => {
    let upDateEtape = listEtapes.map((etape) => {
      if (etape.id === id) {
        return data;
      }
      return etape;
    });

    setListEtape(() => upDateEtape);
  };

  const handleChangeIngredient = (id, data) => {
    let upDateIngredient = listIngredient.map((ingredient) => {
      if (ingredient.id === id) {
        return data;
      }
      return ingredient;
    });

    setListingredient(() => upDateIngredient);
  };

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
      <SectionForm>
        <h3 className="titleFormSection">Ingredients</h3>
        {listIngredient.length > 0 &&
          listIngredient.map((ingredient) => (
            <IngredientInput
              key={ingredient.id}
              ingredient={ingredient}
              onChange={handleChangeIngredient}
              onRemoveitem={removeElement}
            />
          ))}
        <AddElementButton onClick={addIngredient}>
          <IconButton>
            <AddIcon />
          </IconButton>
          Ajouter un ingredient
        </AddElementButton>
      </SectionForm>
      <SectionForm style={{ marginTop: 42 }}>
        <h3 className="titleFormSection">Etapes</h3>
        {listEtapes.length > 0 &&
          listEtapes.map((etape) => (
            <EtapeInput
              key={etape.id}
              etape={etape}
              onChange={handleChangeEtape}
              onRemoveitem={removeElement}
            />
          ))}
        <AddElementButton onClick={addEtapes}>
          <IconButton>
            <AddIcon />
          </IconButton>
          Ajouter une etape
        </AddElementButton>
      </SectionForm>
    </FormRecipeContainer>
  );
};

export default AddRecipe;
