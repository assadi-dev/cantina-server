import React, { useEffect, useState } from "react";
import FloatingLabel from "../../components/Input/FloatingLabel";
import { FormInputControl, IngredientRowinput } from "./FormRecipe.styled";

const IngredientInput = ({ ingredient, onChange }) => {
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
            type="number"
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
      </IngredientRowinput>
    </FormInputControl>
  );
};

export default IngredientInput;
