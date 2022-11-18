import React from "react";
import { StepIndicator } from "./RecipesDetail.styled";
import uniqid from "uniqid";

const ListEtapes = ({ etapes }) => {
  return (
    <>
      {etapes ? (
        <ul>
          {etapes.map((etape, index) => (
            <li key={uniqid()}>
              <StepIndicator>{index + 1}</StepIndicator>
              <p>{etape}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ paddingTop: "1.2rem" }}>Pas d'etapes</p>
      )}
    </>
  );
};

export default ListEtapes;
