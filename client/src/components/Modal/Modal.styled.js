import styled from "styled-components";

export const ModalBackdrop = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  transition: all 0.35;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : " hidden")};
`;

export const ModalConfirmContainer = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
  background-color: var(--white);
  padding: 10px;
  min-width: 250px;
`;

export const ModalConfirmHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ModalConfirmContent = styled.div`
  padding: 10px 22px;
`;

export const CloseModalBtn = styled.span`
  width: 25px;
  height: 25px;
  svg {
    width: 20px;
    height: 20px;
  }
  :hover {
    opacity: 0.5;
  }
  :active {
    opacity: 0.3;
  }
`;
