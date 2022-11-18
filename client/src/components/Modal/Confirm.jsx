import React from "react";
import { CrossIcon } from "../Icons/Icons";
import {
  CloseModalBtn,
  ModalConfirmContainer,
  ModalConfirmContent,
  ModalConfirmHeader,
} from "./Modal.styled";

const Confirm = ({ isOpen, onClose, children }) => {
  return (
    <ModalConfirmContainer>
      <ModalConfirmHeader>
        <CloseModalBtn onClick={onClose}>
          {" "}
          <CrossIcon />
        </CloseModalBtn>
      </ModalConfirmHeader>
      <ModalConfirmContent>{children}</ModalConfirmContent>
    </ModalConfirmContainer>
  );
};

export default Confirm;
