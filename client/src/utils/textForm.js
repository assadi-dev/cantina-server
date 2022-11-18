/**
 * Mettre la première lettre en Majuscule
 * @param {String} string
 * @returns
 */
export const ucFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Retourn le pluriel d'un mot
 * @param {Number} nb nombre à comparé
 * @param {String} singulier mot au singulier
 * @param {String} pluriels mot à affiché aux pluriels
 */
export const pluriel = (nb, singulier, pluriels) => {
  return Number(nb) > 1 ? pluriels : singulier;
};

/**
 * Extraie l'unité dans une chaine de caracter en suppriment les valeurs numerique
 * @param {String} string
 * @returns Ex 2cl => cl
 */
export const extractUnite = (string) => {
  //Default /\d+/g
  let r = new RegExp("\\d+", "g");
  return string.replace(r, "");
};

/**
 * Extraie une valeur numerique dans une chaine de caracter en supprimant tout les valeurs de type string
 * @param {String} string
 * @returns 2cl => 2
 */
export const extractQte = (string) => {
  // Default /([a-zA-Z])\w+/g
  let r = new RegExp("([a-zA-Z])", "g");
  return string.replace(r, "");
};
