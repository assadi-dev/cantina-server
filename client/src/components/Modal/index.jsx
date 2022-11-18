import React from "react";
import { ModalBackdrop } from "./Modal.styled";

const Modal = ({ isOpen, onClose, children }) => {
  return <ModalBackdrop isOpen={isOpen}>{children}</ModalBackdrop>;
};

export default Modal;
