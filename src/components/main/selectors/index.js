import {FILTER_ALL_GENRES_NAME} from '@consts/';


export const getFilmsByGenre = (films, genre) => {
  if (genre === FILTER_ALL_GENRES_NAME) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
