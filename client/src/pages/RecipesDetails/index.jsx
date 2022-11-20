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
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Cantina {titre ? " - " + titre : ""} </title>
      </Helmet>
      <section className="section">
        <HeaderPresentation>
          <h1 className="title">{titre}</h1>
          <HeaderDetailRow className="section">
            {render ? (
              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 10, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Preview
                  src={photo ? photo : IMG_BLANK}
                  alt={`${titre}-photo`}
                />
              </motion.div>
            ) : (
              <Skeleton
                containerClassName="img-loader"
                className="img-loader"
              />
            )}
            <DetailPreparation>
              {render ? (
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                  <ListPreparation
                    tempsPreparation={tempsPreparation}
                    niveau={niveau}
                    personnes={personnes}
                  />
                </motion.div>
              ) : (
                <div className="detailLoader">
                  <Skeleton
                    containerClassName="img-loader"
                    className="text-loader"
                    count="3"
                  />
                </div>
              )}
            </DetailPreparation>
          </HeaderDetailRow>
        </HeaderPresentation>
      </section>
      <DescriptionSection>
        <HeaderSection>Description</HeaderSection>
        {render ? (
          <motion.p
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 10, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            {description}
          </motion.p>
        ) : (
          <Skeleton
            containerClassName="img-loader"
            className="onParagraphe"
            count="1"
          />
        )}
      </DescriptionSection>
      <IngredientSection>
        <HeaderSection>Ingredients</HeaderSection>
        {render ? (
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 10, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            {" "}
            <ListIngredient ingredients={ingredients} />
          </motion.div>
        ) : (
          <Skeleton
            containerClassName="img-loader"
            className="text-loader"
            count="4"
          />
        )}
      </IngredientSection>

      <EtapesSection>
        <HeaderSection>Etapes</HeaderSection>
        {render ? (
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 10, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            {" "}
            <ListEtapes etapes={etapes} />{" "}
          </motion.div>
        ) : (
          <Skeleton
            containerClassName="img-loader"
            className="text-loader"
            count="4"
          />
        )}
      </EtapesSection>
    </RecipesDetailWrapper>
  );
};

export default RecipesDetails;
