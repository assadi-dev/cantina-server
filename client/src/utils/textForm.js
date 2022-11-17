export const ucFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Retourn le pluriel d'une chaone de caracteres
 * @param {Number} nb nombre à comparé
 * @param {String} string mot au singulier
 * @param {String} pluriels mot à affiché aux pluriels
 */
export const pluriel = (nb, string, pluriels) => {
  return nb > 1 ? pluriels : string;
};
