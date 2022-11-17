import React from "react";
import FloatingLabel from "../../components/Input/FloatingLabel";
import { FormInputControl, IngredientRowinput } from "./FormRecipe.styled";

const IngredientInput = () => {
  return (
    <FormInputControl>
      <IngredientRowinput>
        <div className="qte">
          <FloatingLabel label="Qté" type="number" min="1" defaultValue="1" />
        </div>
        <div className="unite">
          <FloatingLabel label="Unité" />
        </div>
        <div className="ingredients">
          <FloatingLabel label="Ingedient" />
        </div>
      </IngredientRowinput>
    </FormInputControl>
  );
};

export default IngredientInput;
