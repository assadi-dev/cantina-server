import React from "react";
import { Link } from "react-router-dom";
import { IMG_BLANK } from "../../constant/theme";
import { pluriel } from "../../utils/textForm";
import { minToHourString } from "../../utils/time";
import { ClockIcon, PencilIcon, PersonesIcon, TrashIcon } from "../Icons/Icons";
import {
  CardBody,
  CardBodyRow,
  CardContainer,
  CardPreview,
  CardTextDetail,
  IconCard,
} from "./Card.styled";
import Difficulty from "./Difficulty";

const Card = ({ id, preview, title, niveau, personnes, tempsPreparation }) => {
  let photo = preview ? preview : IMG_BLANK;

  const handleDelete = () => {
    alert("Voulez-vous supprimer ?");
  };

  return (
    <CardContainer>
      <CardBody>
        <div>
          <Link to={`recette/${id}`}>
            <CardPreview src={photo} alt="Preview" />
            <CardBodyRow>
              <p className="title">{title}</p>
              <Link to={`recette/modifier/${id}`}>
                <IconCard className="edit" title="Modifier la recette">
                  <PencilIcon />
                </IconCard>
              </Link>
            </CardBodyRow>
            <CardBodyRow>
              <CardTextDetail>
                <IconCard>
                  <PersonesIcon />
                </IconCard>
                {`${personnes} ${pluriel(personnes, "personne", "personnes")}`}
              </CardTextDetail>
              <CardTextDetail title="Temps de péparation">
                <IconCard>
                  <ClockIcon />
                </IconCard>
                {tempsPreparation &&
                  minToHourString(parseInt(tempsPreparation))}
              </CardTextDetail>
            </CardBodyRow>
          </Link>
          <CardBodyRow>
            <IconCard
              className="delete"
              title="Supprimer la recette"
              onClick={handleDelete}
            >
              <TrashIcon />
            </IconCard>
            <Difficulty niveau={niveau} />
          </CardBodyRow>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
