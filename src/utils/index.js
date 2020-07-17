import {FilmRating} from '@consts/';


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


export {
  extend,
  getTextRating,
};
