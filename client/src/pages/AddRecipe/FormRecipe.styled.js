import styled from "styled-components";

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
  background-image: url(${imgTest});
  width: 250px;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

export const IngredientForm = styled.div`
  margin-top: 1.4rem;
  margin-bottom: 1.4rem;
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
