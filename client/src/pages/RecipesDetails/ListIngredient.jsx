import React from "react";
import uniqid from "uniqid";

const ListIngredient = ({ ingredients }) => {
  return (
    <>
      {ingredients ? (
        <ul>
          {ingredients.map((ingredient) => (
            <li key={uniqid()}>{ingredient.join(" ")}</li>
          ))}
        </ul>
      ) : (
        <p style={{ paddingTop: "1.2rem" }}>Pas d'ingredients</p>
      )}
    </>
  );
};

export default ListIngredient;
