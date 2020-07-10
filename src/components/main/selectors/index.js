import {FILTER_ALL_GENRES_NAME} from '@consts/';


export const getFilmsByGenre = (state) => {
  if (state.currentFilter === FILTER_ALL_GENRES_NAME) {
    return state.films;
  }

  return state.films.filter((film) => film.genre === state.currentFilter);
};
