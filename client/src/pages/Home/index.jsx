import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/Cards";
import Carousel from "../../components/Carrousel";
import {
  AddIcon,
  FilterSettingIcon,
  SearchIcon,
} from "../../components/Icons/Icons";
import { getAllRecipes } from "../../redux/actions/RecipeAction.action";
import {
  ActionRow,
  AddButton,
  GridItems,
  HomeWrapper,
  ListCardRecipeContainer,
} from "./Home.styled";
import SearchBar from "./SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const recepesCollection = useSelector((state) => state.RecipesReducer);

  useEffect(() => {
    dispatch(getAllRecipes());
  }, []);

  return (
    <HomeWrapper>
      <Carousel />
      <ActionRow className="section-separator">
        <div className="col start">
          <AddButton to="recette/ajouter">
            <span>
              <AddIcon />
            </span>
            Ajouter une nouvelle recette
          </AddButton>
        </div>
        <div className="col end">
          <SearchBar />
        </div>
      </ActionRow>

      <ListCardRecipeContainer className="section-separator">
        {recepesCollection.isReady
          ? recepesCollection.all.map((recipes) => (
              <GridItems key={recipes.id}>
                <Card
                  id={recipes.id}
                  title={recipes.titre}
                  niveau={recipes.niveau}
                  preview={recipes.photo}
                  personnes={recipes.personnes}
                  tempsPreparation={recipes.tempsPreparation}
                />
              </GridItems>
            ))
          : null}
      </ListCardRecipeContainer>
    </HomeWrapper>
  );
};

export default Home;
