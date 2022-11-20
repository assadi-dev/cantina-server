import React, { useEffect, useState } from "react";
import { CrossIcon } from "../../components/Icons/Icons";
import FloatingLabel from "../../components/Input/FloatingLabel";
import TextareaFloatingLabel from "../../components/Input/TextareaFloatingLabel";
import {
  FormInputControl,
  IngredientRowinput,
  RowInputEtape,
} from "./FormRecipe.styled";

const EtapeInput = ({ etape, onChange, onRemoveitem, numero }) => {
  const { id, content } = etape;
  const [inputvalue, setInputValue] = useState({
    id,
    content,
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRemoveItem = () => {
    onRemoveitem(id, "etape");
  };

  useEffect(() => {
    onChange(id, inputvalue);
  }, [inputvalue.content]);

  return (
    <FormInputControl>
      <RowInputEtape>
        <div className="etapes">
          <TextareaFloatingLabel
            name="content"
            label={"Etape " + numero}
            value={inputvalue.content}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          onClick={() => handleRemoveItem()}
          className="removeBtn"
          title="Retirer cette étape"
        >
          <CrossIcon />
        </button>
      </RowInputEtape>
    </FormInputControl>
  );
};

export default EtapeInput;
