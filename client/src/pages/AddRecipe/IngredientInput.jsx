import React, { useEffect, useState } from "react";
import { CrossIcon } from "../../components/Icons/Icons";
import FloatingLabel from "../../components/Input/FloatingLabel";
import { FormInputControl, IngredientRowinput } from "./FormRecipe.styled";

const IngredientInput = ({ ingredient, onChange, onRemoveitem }) => {
  const { id, qte, unite, label } = ingredient;
  const [inputvalue, setInputValue] = useState({
    id,
    qte,
    unite,
    label,
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRemoveItem = () => {
    onRemoveitem(id, "ingredient");
  };
  useEffect(() => {
    onChange(id, inputvalue);
  }, [inputvalue.qte, inputvalue.unite, inputvalue.label]);

  return (
    <FormInputControl>
      <IngredientRowinput>
        <div className="qte">
          <FloatingLabel
            name="qte"
            label="Qté"
            min="1"
            value={inputvalue.qte}
            onChange={handleChange}
          />
        </div>
        <div className="unite">
          <FloatingLabel
            name="unite"
            label="Unité"
            value={inputvalue.unite}
            onChange={handleChange}
          />
        </div>
        <div className="ingredients">
          <FloatingLabel
            name="label"
            label="Ingedient"
            value={inputvalue.label}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          onClick={handleRemoveItem}
          className="removeBtn"
          title="Retirer cette ingredient"
        >
          <CrossIcon />
        </button>
      </IngredientRowinput>
    </FormInputControl>
  );
};

export default IngredientInput;
