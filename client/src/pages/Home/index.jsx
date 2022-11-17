import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Cards";
import Carousel from "../../components/Carrousel";
import {
  AddIcon,
  FilterSettingIcon,
  SearchIcon,
} from "../../components/Icons/Icons";
import {
  ActionRow,
  AddButton,
  GridItems,
  HomeWrapper,
  ListCardRecipeContainer,
} from "./Home.styled";
import SearchBar from "./SearchBar";

const Home = () => {
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
        <GridItems>
          <Card />
        </GridItems>
        <GridItems>
          <Card />
        </GridItems>
        <GridItems>
          <Card />
        </GridItems>
        <GridItems>
          <Card />
        </GridItems>
      </ListCardRecipeContainer>
    </HomeWrapper>
  );
};

export default Home;
