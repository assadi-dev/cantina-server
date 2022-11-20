import styled from "styled-components";
import { IMG_BLANK } from "../../constant/theme";

export const FormRecipeContainer = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 80%;
  }
  .text-indication {
    color: rgba(0, 0, 0, 0.5);
  }
  .error-message {
    margin: 0.6rem 0;
    color: var(--danger-color);
  }
`;

export const FormInputControl = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const HeaderFormRecipes = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  grid-gap: 25px;
  .col-left {
    width: 80%;
    justify-content: flex-start;
  }
  .col-right {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const HeaderFormPreview = styled.div`
  background-image: ${({ img }) => (img ? `url(${img})` : `url(${IMG_BLANK})`)};
  width: 250px;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

export const SectionForm = styled.div`
  margin-top: 1.4rem;
  margin-bottom: 1.4rem;
  .titleFormSection {
    margin-bottom: 1.4rem;
  }
`;

export const IngredientRowinput = styled.div`
  display: flex;
  align-items: center;
  .qte {
    max-width: 100px;
  }
  .unite {
    max-width: 200px;
    margin: 0 1.4rem;
  }
  .ingredients {
    min-width: 250px;
    max-width: 350px;
  }
`;

export const AddElementButton = styled.span`
  display: flex;
  align-items: center;
  color: var(--primary-color);
  cursor: pointer;

  :active {
    opacity: 0.5;
  }
`;
export const IconButton = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const FormBottom = styled.div`
  width: 100%;
  min-height: 50px;
  margin: 1rem 0;
  padding: 2.5rem 0rem;
`;

export const SubmitBtn = styled.button`
  width: fit-content;
  padding: 12px 22px;
  color: var(--white);
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  background-color: var(--primary-color);
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.25);

  :disabled {
    opacity: 0.5;
  }
  :active {
    opacity: 0.5;
  }
`;

export const RowBtnContainer = styled.div`
  width: 100%;
  padding: 15px 0;
  text-align: center;
`;

export const AddPhotoBtn = styled.button`
  width: fit-content;
  padding: 12px 22px;
  color: var(--white);
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  background-color: var(--primary-color);
  border-radius: 5px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.25);
`;

export const ModalInputPhotoContainer = styled.div`
  width: 80%;
  min-height: 100px;
  padding: 12px 18px;
  @media screen and (min-width: 768px) {
    width: 550px;
    background-color: var(--white);
    border-radius: 5px;
  }
`;

export const ModalHeaderphoto = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  .close {
    width: 20px;
    height: 20px;
    cursor: pointer;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ModalInputPhoto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;
