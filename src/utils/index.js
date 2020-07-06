import {FILTER_ALL_GENRES_NAME} from '@consts/';


const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getUniqueGenres = (films) => {
  return films.map((film) => film.genre)
    .filter((value, index, self) => self.indexOf(value) === index);
};

const getFilmsByGenre = (films, genre) => {
  if (genre === FILTER_ALL_GENRES_NAME) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};


export {
  extend,
  getUniqueGenres,
  getFilmsByGenre,
};
