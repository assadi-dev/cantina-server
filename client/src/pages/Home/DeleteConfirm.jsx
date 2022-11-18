import React from "react";
import { useDispatch } from "react-redux";
import {
  LoadData,
  removeRecipes,
} from "../../redux/actions/RecipeAction.action";
import {
  CancelBtn,
  ConfirmBtn,
  DeleteContainer,
  DeleteRowContainer,
} from "./Home.styled";

const DeleteConfirm = ({ id, confirmAction, cancelAction, alertMessage }) => {
  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    if (id) {
      dispatch(removeRecipes(id)).then(() => cancelAction());
    }
  };

  return (
    <DeleteContainer>
      <p className="message">{alertMessage}</p>
      <DeleteRowContainer>
        <div className="grid-end">
          <ConfirmBtn onClick={handleConfirmDelete}>Confirmer</ConfirmBtn>
        </div>
        <div className="grid-start">
          <CancelBtn onClick={cancelAction}>Annuler</CancelBtn>
        </div>
      </DeleteRowContainer>
    </DeleteContainer>
  );
};

export default DeleteConfirm;
