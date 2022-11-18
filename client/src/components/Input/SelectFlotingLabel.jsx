import React, { useEffect, useState, useRef } from "react";
import { FloatingLabelContainer, Label } from "./Input.styled";

const SelectFlotingLabel = ({
  htmlFor,
  label,
  optionValues,
  inputContainerStyle,
  ...props
}) => {
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
    <FloatingLabelContainer isFocus={focus} style={inputContainerStyle}>
      <select
        {...props}
        onFocus={handleFocus}
        onBlur={handleFocus}
        ref={inputRef}
      >
        {optionValues &&
          optionValues.map((option, i) => (
            <option value={option.value} key={i}>
              {option.label}
            </option>
          ))}
      </select>
      <Label htmlFor={htmlFor} isFocus={focus} isValid={valid}>
        {label}
      </Label>
    </FloatingLabelContainer>
  );
};

export default SelectFlotingLabel;
