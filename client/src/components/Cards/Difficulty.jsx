import React from "react";
import { ucFirst } from "../../utils/textForm";
import { CardTextDetail } from "./Card.styled";

const Difficulty = ({ niveau }) => {
  switch (niveau) {
    case "padawan":
      return (
        <CardTextDetail className="padawan" title="Niveau de difficulté">
          Padawan
        </CardTextDetail>
      );
    case "jedi":
      return (
        <CardTextDetail className="jedi" title="Niveau de difficulté">
          Jedi
        </CardTextDetail>
      );
    case "maitre":
      return (
        <CardTextDetail className="master" title="Niveau de difficulté">
          Maître
        </CardTextDetail>
      );

    default:
      return <CardTextDetail>{ucFirst(niveau)}</CardTextDetail>;
  }
};

export default Difficulty;
