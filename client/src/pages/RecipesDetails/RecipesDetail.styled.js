import styled from "styled-components";

export const RecipesDetailWrapper = styled.div`
    width:100%
    margin-top:1.8rem;
    padding:22px 5px;
    .section {
    margin-top:1.2rem;
    margin-bottom:1.2rem;
    @media (min-width:550px){
      padding:22px 18px;
    }
  }

  .padawan {
    color: var(--padawan-color);
    font-weight: bold;
  }
  .jedi {
    color: var(--jedi-color);
    font-weight: bold;
  }
  .master {
    color: var(--master-color);
    font-weight: bold;
  }
  .detailLoader{
    margin-left: 1rem;height:240px; width:550px;
  }

`;

export const HeaderPresentation = styled.div`
  .title {
    font-weight: bold;
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
    @media (min-width: 992px) {
      font-size: 1.8rem;
    }
  }
`;

export const HeaderDetailRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 550px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Preview = styled.img`
  width: 258px;
  height: 198px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 2.8rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 550px) {
    margin: 0;
  }
`;

export const DetailPreparation = styled.div`
  ul {
    margin-left: 0px;
    @media (min-width: 550px) {
      margin-left: 28px;
    }

    li {
      padding-bottom: 1.8rem;
      padding-left: 1.2rem;
      display: flex;
      align-items: center;
    }
  }
`;

export const IconDetailPreparation = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const DifficultyTextStyle = styled.span`
  margin-left: 0.4rem;
`;

//Section Description
export const DescriptionSection = styled.section`
  margin: 1.4rem 0;
  padding: 1rem 0;
  p {
    line-height: 23px;
  }
`;

export const HeaderSection = styled.div`
  background-color: var(--jedi-color);
  padding: 0.8rem 0.8rem 0.8rem 1rem;
  color: var(--white);
  font-weight: bold;
  margin-bottom: 1.4rem;
`;

export const IngredientSection = styled.section`
  margin: 1.4rem 0;
  padding: 1rem 0;

  ul {
    padding: 1.2rem;
    li {
      padding-top: 1.2rem;
      padding-bottom: 1.2rem;
      border-bottom: 1px solid var(--light-grey-color);
    }
  }
`;

export const EtapesSection = styled.section`
  margin: 1.4rem 0;
  padding: 1rem 0;
  ul {
    @media (min-width: 550px) {
      padding-left: 1rem;
    }
    li {
      padding-top: 1.2rem;
      padding-bottom: 1.2rem;
      margin-bottom: 1rem;
      display: grid;
      grid-template-columns: 40px 1fr;
      align-items: start;
      grid-gap: 0.8rem;
    }
  }
`;

export const StepIndicator = styled.span`
  border-radius: 100px;
  height: 30px;
  width: 30px;
  background-color: var(--white);
  box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.25);
  display: grid;
  place-items: center;
  margin-right: 1.4rem;
  font-size: 0.8rem;
`;
