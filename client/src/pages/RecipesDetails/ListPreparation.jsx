import React from "react";
import { ClockIcon, PersonesIcon } from "../../components/Icons/Icons";
import { pluriel } from "../../utils/textForm";
import { minToHourString } from "../../utils/time";
import DifficultyStyle from "./DifficultyStyle";
import {
  DetailPreparation,
  IconDetailPreparation,
} from "./RecipesDetail.styled";

const ListPreparation = ({ tempsPreparation, niveau, personnes }) => {
  return (
    <DetailPreparation>
      <ul>
        <li>
          <IconDetailPreparation>
            <ClockIcon />
          </IconDetailPreparation>{" "}
          Temps de préparation :
          {` ${minToHourString(parseInt(tempsPreparation))}`}
        </li>
        <li>
          <IconDetailPreparation>
            <PersonesIcon />
          </IconDetailPreparation>
          Nombre de personne(s) :{" "}
          {`${personnes} ${pluriel(personnes, "personne", "personnes")}`}
        </li>
        <li>
          Difficulté : <DifficultyStyle niveau={niveau} />{" "}
        </li>
      </ul>
    </DetailPreparation>
  );
};

export default ListPreparation;
