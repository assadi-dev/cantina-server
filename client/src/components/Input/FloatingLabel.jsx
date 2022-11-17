import React from "react";
import { FloatingLabelContainer, Label } from "./Input.styled";

const FloatingLabel = ({ labelFor, label, ...props }) => {
  return (
    <FloatingLabelContainer>
      <input {...props} required />
      <Label htmlFor={labelFor}>{label}</Label>
    </FloatingLabelContainer>
  );
};

export default FloatingLabel;
