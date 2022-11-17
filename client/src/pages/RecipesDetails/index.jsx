import React from "react";
import { useParams } from "react-router-dom";
import ListEtapes from "./ListEtapes";
import ListIngredient from "./ListIngredient";
import ListPreparation from "./ListPreparation";
import {
  DescriptionSection,
  DetailPreparation,
  EtapesSection,
  HeaderDetailRow,
  HeaderPresentation,
  HeaderSection,
  IngredientSection,
  Preview,
  RecipesDetailWrapper,
} from "./RecipesDetail.styled";

const RecipesDetails = () => {
  const { id } = useParams();
  const imgTest =
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

  return (
    <RecipesDetailWrapper>
      <section className="section">
        <HeaderPresentation>
          <h1 className="title">Recette {id}</h1>
          <HeaderDetailRow className="section">
            <Preview src={imgTest} alt="title" />
            <DetailPreparation>
              <ListPreparation />
            </DetailPreparation>
          </HeaderDetailRow>
        </HeaderPresentation>
      </section>
      <DescriptionSection>
        <HeaderSection>Description</HeaderSection>
        <p>
          Lorem ipsum dolor sit amet consectetur. Consequat sed urna proin leo.
          Amet risus ut nec nullam nunc diam id tortor vitae.
        </p>
      </DescriptionSection>
      <IngredientSection>
        <HeaderSection>Ingredients</HeaderSection>
        <ListIngredient />
      </IngredientSection>

      <EtapesSection>
        <HeaderSection>Etapes</HeaderSection>
        <ListEtapes />
      </EtapesSection>
    </RecipesDetailWrapper>
  );
};

export default RecipesDetails;
