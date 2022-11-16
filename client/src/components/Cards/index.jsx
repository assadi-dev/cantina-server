import React from "react";
import { Link } from "react-router-dom";
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
  const imgTest =
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

  const handleDelete = () => {
    alert("Voulez-vous supprimer ?");
  };

  return (
    <CardContainer>
      <CardBody>
        <div>
          <Link to={`recette/${2}`}>
            <CardPreview src={imgTest} alt="Preview" />
            <CardBodyRow>
              <p className="title">Title</p>
              <Link to={`recette/modifier/15`}>
                {" "}
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
                1 personne
              </CardTextDetail>
              <CardTextDetail title="Temps de péparation">
                {" "}
                <IconCard>
                  <ClockIcon />
                </IconCard>{" "}
                1h32
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
            <Difficulty niveau={"padawan"} />
          </CardBodyRow>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
