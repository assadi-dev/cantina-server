import React, { useEffect, useState, useRef } from "react";
import { FloatingLabelContainer, Label } from "./Input.styled";

const TextareaFloatingLabel = ({ label, ...props }) => {
  const [focus, setFocus] = useState(false);
  const [valid, setValid] = useState(false);
  const handleFocus = (e) => {
    let value = e.target.value;
    setFocus(() => !focus);
    value.length > 0 ? setValid(true) : setValid(false);
  };
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current.value.length > 0) setValid(true);
  }, [inputRef.current]);

  return (
    <FloatingLabelContainer isFocus={focus}>
      <textarea
        {...props}
        onFocus={handleFocus}
        onBlur={handleFocus}
        ref={inputRef}
      />
      <Label isFocus={focus} isValid={valid}>
        {label}
      </Label>
    </FloatingLabelContainer>
  );
};

export default TextareaFloatingLabel;
