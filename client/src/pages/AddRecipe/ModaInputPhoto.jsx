import React, { useState } from "react";
import { CrossIcon } from "../../components/Icons/Icons";
import FloatingLabel from "../../components/Input/FloatingLabel";
import { isValidUrl } from "../../utils/textForm";
import {
  AddPhotoBtn,
  ErrorMessage,
  ModalHeaderphoto,
  ModalInputPhoto,
  ModalInputPhotoContainer,
} from "./FormRecipe.styled";

const ModaInputPhoto = ({ isOpen, onChange, onClose, value }) => {
  const [inputValue, setInputValue] = useState({ value, error: "" });

  const resetForm = () => {
    setInputValue({ value: "", error: "" });
  };

  console.log(value);
  const handleSubmitPhoto = (e) => {
    e.preventDefault();
    let error = isValidUrl(inputValue.value) ? "" : "URL Invalide";
    setInputValue((prevState) => ({ ...prevState, error }));
    if (inputValue.value.length > 0 && error.length == 0) {
      onChange(inputValue.value);
      onClose();
    }
  };

  const handleChangeInput = (e) => {
    let value = e.target.value;
    let error = "";
    setInputValue((prevState) => ({ ...prevState, value, error }));
  };

  const closeForm = () => {
    onClose();
  };

  return (
    <ModalInputPhotoContainer>
      <ModalHeaderphoto>
        <p>Entrer l'url de l'image</p>
        <button className="close" title="Fermer" onClick={closeForm}>
          <CrossIcon />
        </button>
      </ModalHeaderphoto>
      <form onSubmit={handleSubmitPhoto}>
        <ModalInputPhoto>
          <FloatingLabel
            placeholder="ex: https://example.com/xyz"
            value={inputValue.value}
            inputContainerStyle={{ paddingBottom: 0 }}
            onChange={handleChangeInput}
          />
          {<ErrorMessage> {inputValue.error}</ErrorMessage>}
          <AddPhotoBtn>Valider</AddPhotoBtn>
        </ModalInputPhoto>
      </form>
    </ModalInputPhotoContainer>
  );
};

export default ModaInputPhoto;
