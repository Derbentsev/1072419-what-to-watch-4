const FilmRating = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};


const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getTextRating = (ratingCount) => {
  if (ratingCount <= 3) {
    return FilmRating.BAD;
  } else if (ratingCount <= 5) {
    return FilmRating.NORMAL;
  } else if (ratingCount <= 8) {
    return FilmRating.GOOD;
  } else if (ratingCount <= 10) {
    return FilmRating.VERY_GOOD;
  }

  return FilmRating.AWESOME;
};

const isValidEmail = (email) => {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email);
};

const isValidPassword = (password) => {
  return password !== ``;
};

const getRunTimeFromMinutes = (minutes) => {
  const hours = minutes / 60;
  return Math.floor(hours) + `h` + ` ` + Math.floor((hours - Math.floor(hours)) * 60) + `m`;
};


export {
  extend,
  getTextRating,
  isValidEmail,
  isValidPassword,
  getRunTimeFromMinutes,
};
