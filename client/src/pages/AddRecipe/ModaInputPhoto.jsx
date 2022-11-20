import React from "react";
import { CrossIcon } from "../../components/Icons/Icons";
import FloatingLabel from "../../components/Input/FloatingLabel";
import {
  AddPhotoBtn,
  ModalHeaderphoto,
  ModalInputPhoto,
  ModalInputPhotoContainer,
} from "./FormRecipe.styled";

const ModaInputPhoto = ({ isOpen, onChange, onClose, value }) => {
  const handleSubmitPhoto = (e) => {
    e.preventDefault();
  };

  return (
    <ModalInputPhotoContainer>
      <ModalHeaderphoto>
        <p>Entrer l'url de l'image</p>
        <button className="close" title="Fermer" onClick={onClose}>
          <CrossIcon />
        </button>
      </ModalHeaderphoto>
      <form onSubmit={handleSubmitPhoto}>
        <ModalInputPhoto>
          <FloatingLabel
            type="url"
            placeholder="ex: https://example.com/xyz"
            onChange={onChange}
            value={value}
          />
          <AddPhotoBtn>Valider</AddPhotoBtn>
        </ModalInputPhoto>
      </form>
    </ModalInputPhotoContainer>
  );
};

export default ModaInputPhoto;
