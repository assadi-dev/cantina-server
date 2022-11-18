import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_BLANK } from "../../constant/theme";
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
import { findOneRecipes } from "../../redux/actions/RecipeAction.action";
import { sleep } from "../../utils/time";

const RecipesDetails = () => {
  const { id } = useParams();
  const [render, setRender] = useState(false);
  const dispatch = useDispatch();
  const recipeSelector = useSelector((state) => state.RecipesReducer);

  useEffect(() => {
    dispatch(findOneRecipes(id));
  }, [id]);

  recipeSelector.isReady && sleep(1000).then(() => setRender(true));

  const {
    titre,
    description,
    niveau,
    personnes,
    tempsPreparation,
    ingredients,
    etapes,
    photo,
  } = render && recipeSelector.selected;

  return (
    <RecipesDetailWrapper>
      <section className="section">
        <HeaderPresentation>
          <h1 className="title">{titre}</h1>
          <HeaderDetailRow className="section">
            {render ? (
              <Preview src={photo ? photo : IMG_BLANK} alt={`${titre}-photo`} />
            ) : null}
            <DetailPreparation>
              {render ? (
                <ListPreparation
                  tempsPreparation={tempsPreparation}
                  niveau={niveau}
                  personnes={personnes}
                />
              ) : null}
            </DetailPreparation>
          </HeaderDetailRow>
        </HeaderPresentation>
      </section>
      <DescriptionSection>
        <HeaderSection>Description</HeaderSection>
        {render ? <p>{description}</p> : null}
      </DescriptionSection>
      <IngredientSection>
        <HeaderSection>Ingredients</HeaderSection>
        {render ? <ListIngredient ingredients={ingredients} /> : null}
      </IngredientSection>

      <EtapesSection>
        <HeaderSection>Etapes</HeaderSection>
        {render ? <ListEtapes etapes={etapes} /> : null}
      </EtapesSection>
    </RecipesDetailWrapper>
  );
};

export default RecipesDetails;
