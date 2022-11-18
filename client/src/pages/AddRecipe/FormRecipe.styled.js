import styled from "styled-components";
import { IMG_BLANK } from "../../constant/theme";

const imgTest =
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

export const FormRecipeContainer = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 80%;
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
  :disabled {
    opacity: 0.5;
  }
  :active {
    opacity: 0.5;
  }
`;
