import React from "react";
import { DifficultyTextStyle } from "./RecipesDetail.styled";

export const DifficultyStyle = ({ niveau }) => {
  switch (niveau) {
    case "padawan":
      return (
        <DifficultyTextStyle className="padawan" title="Niveau de difficulté">
          Padawan
        </DifficultyTextStyle>
      );
    case "jedi":
      return (
        <DifficultyTextStyle className="jedi" title="Niveau de difficulté">
          Jedi
        </DifficultyTextStyle>
      );
    case "maitre":
      return (
        <DifficultyTextStyle className="master" title="Niveau de difficulté">
          Maître
        </DifficultyTextStyle>
      );
  }
};

export default DifficultyStyle;
