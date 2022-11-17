import styled from "styled-components";

//Floating Label
export const Label = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  font-weight: 400;
  color: var(--grey-color);
  pointer-events: none;
  transform: translateY(30px);
  transition: all 0.25s ease-in-out;
`;

export const FloatingLabelContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 20px 0;
  input {
    width: 100%;
    padding: 10px 0;
    display: block;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: solid 1px var(--grey-color);

    &:focus ~ ${Label}, &:valid ~ ${Label} {
      color: var(--padawan-color);
      transform: translateY(0) scale(0.8);
    }
    &:focus,
    &:valid {
      border-bottom: solid 1px var(--padawan-color);
    }
  }
`;
