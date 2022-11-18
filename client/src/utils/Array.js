/**
 * Supprimer un élément du tableau appartire de la proprieté key du tableau
 * @param {Array} array
 * @param {String} key
 * @param {String} id
 * @returns
 */
export const removeItem = (array, key, id) => {
  if (key === undefined || key === null) {
    throw new Error("l'argument key non definis");
  }

  return array.filter((item) => item[key] != id);
};

/**
 *
 * @param {Array} array Tableau numerique [1,2,3,4]
 * @returns
 */
export const extractMaxNumber = (array) => {
  return Math.max.apply(null, array);
};

/**
 *
 * @param {Arraay} array Tableau numerique [1,2,3,4]
 * @returns
 */
export const extractMinNumber = (array) => {
  return Math.min.apply(null, array);
};
