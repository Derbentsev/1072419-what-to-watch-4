import NameSpace from '@reducer/name-space';
import {FILTER_ALL_GENRES_NAME} from '@consts/';


const getFilmById = (state, filmId) => {
  state[NameSpace.FILMS].films.find((film) => film.id === filmId);
};

const getFilmsByGenre = (state) => {
  if (state[NameSpace.FILTER].currentFilter === FILTER_ALL_GENRES_NAME) {
    return state[NameSpace.FILMS].films;
  }

  return state[NameSpace.FILMS].films.filter((film) => film.genre === state[NameSpace.FILTER].currentFilter);
};


export {getFilmById, getFilmsByGenre};
