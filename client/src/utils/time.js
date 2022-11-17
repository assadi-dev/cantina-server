export const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), ms);
  });
};

/**
 * Convertit le min en Heure complete exemple 90 = 1h30
 * @param {Number} time
 * @returns
 */
export const minToHourString = (time) => {
  let hour = time / 60;
  let min = time % 60;
  if (hour < 1) {
    return ` ${min.toFixed(0)} min`;
  }
  return `${hour.toFixed(0)}h${min.toFixed(0)}`;
};
