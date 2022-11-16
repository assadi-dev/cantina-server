import React from "react";
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
          <AddButton>
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
        <Card /> <Card />
      </ListCardRecipeContainer>
    </HomeWrapper>
  );
};

export default Home;
