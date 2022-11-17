import React from "react";
import { ClockIcon, PersonesIcon } from "../../components/Icons/Icons";
import DifficultyStyle from "./DifficultyStyle";
import {
  DetailPreparation,
  IconDetailPreparation,
} from "./RecipesDetail.styled";

const ListPreparation = (tempsPreparation, niveau, personnes) => {
  return (
    <DetailPreparation>
      <ul>
        <li>
          <IconDetailPreparation>
            <ClockIcon />
          </IconDetailPreparation>{" "}
          Temps de préparation : 1h10
        </li>
        <li>
          <IconDetailPreparation>
            <PersonesIcon />
          </IconDetailPreparation>
          Nombre de personne(s) : 2 personnes
        </li>
        <li>
          Difficulté : <DifficultyStyle niveau={"jedi"} />{" "}
        </li>
      </ul>
    </DetailPreparation>
  );
};

export default ListPreparation;
