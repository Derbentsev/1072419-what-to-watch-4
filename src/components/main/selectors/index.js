import {FILTER_ALL_GENRES_NAME} from '@consts/';
import NameSpace from '@reducer/name-space';


export const getFilmsByGenre = (state) => {
  if (state[NameSpace.FILTER].currentFilter === FILTER_ALL_GENRES_NAME) {
    return state[NameSpace.DATA].films;
  }

  return state[NameSpace.DATA].films.filter((film) => film.genre === state[NameSpace.FILTER].currentFilter);
};
