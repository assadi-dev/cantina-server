import styled from "styled-components";

//Floating Label
export const Label = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  font-weight: 400;
  color: var(--grey-color);
  pointer-events: none;
  transition: all 0.25s ease-in-out;
  transform: ${({ isFocus, isValid }) =>
    isFocus || isValid ? "translateY(0px)" : "translateY(30px)"};
`;

export const FloatingLabelContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 20px 0;
  input,
  textarea,
  select {
    width: 100%;
    padding: 10px 0;
    display: block;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: ${({ isFocus }) =>
      isFocus
        ? "solid 1px var(--padawan-color)"
        : "solid 1px var(--grey-color)"};

    option {
      font-size: 16px;
    }
  }
  textarea {
    resize: vertical;
  }
`;
