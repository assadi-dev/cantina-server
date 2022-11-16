import React from "react";
import { useParams } from "react-router-dom";

const RecipesDetails = () => {
  const { id } = useParams();

  return <div>Recette - {id}</div>;
};

export default RecipesDetails;
