import React from "react";
import Carousel from "../../components/Carrousel";
import { AddIcon } from "../../components/Icons/Icons";
import { ActionRow, AddButton, HomeWrapper } from "./Home.styled";

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
          <AddButton>
            <span>
              <AddIcon />
            </span>
            Ajouter une nouvelle recette
          </AddButton>
        </div>
      </ActionRow>
    </HomeWrapper>
  );
};

export default Home;
