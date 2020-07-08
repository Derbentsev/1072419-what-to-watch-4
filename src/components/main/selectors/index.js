import {FILTER_ALL_GENRES_NAME} from '@consts/';


export const getFilmsByGenre = (films, genre, count) => {
  if (genre === FILTER_ALL_GENRES_NAME) {
    return films.slice(0, count);
  }

  return films.filter((film) => film.genre === genre).slice(0, count);
};
