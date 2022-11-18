import React, { useEffect, useState, useRef } from "react";
import { FloatingLabelContainer, Label } from "./Input.styled";

const FloatingLabel = ({ htmlFor, label, ...props }) => {
  const [focus, setFocus] = useState(false);
  const [valid, setValid] = useState(false);
  const handleFocus = (e) => {
    let value = e.target.value;
    setFocus(() => !focus);
    value ? setValid(true) : setValid(false);
  };
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current.value) setValid(true);
  }, [inputRef.current]);

  return (
    <FloatingLabelContainer isFocus={focus}>
      <input
        {...props}
        onFocus={handleFocus}
        onBlur={handleFocus}
        ref={inputRef}
      />
      <Label htmlFor={htmlFor} isFocus={focus} isValid={valid}>
        {label}
      </Label>
    </FloatingLabelContainer>
  );
};

export default FloatingLabel;
