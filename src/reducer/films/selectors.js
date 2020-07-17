import NameSpace from '@reducer/name-space';
import {FILTER_ALL_GENRES_NAME} from '@consts/';
import {createSelector} from 'reselect';


const getUniqueGenres = (films) => {
  return films.map((film) => film.genre)
    .filter((value, index, self) => self.indexOf(value) === index);
};

const getFilmId = (state, filmId) => {
  return filmId;
};

const getFilms = (state) => {
  return state[NameSpace.FILMS].films;
};

const getCurrentFilter = (state) => {
  return state[NameSpace.FILTER].currentFilter;
};

const getFilmById = createSelector(
    getFilmId,
    getFilms,
    (filmId, films) => {
      if (filmId) {
        return films.find((film) => film.id === filmId);
      }
      return null;
    }
);

const getFilmsByGenre = createSelector(
    getFilms,
    getCurrentFilter,
    (films, currentFilter) => {
      if (currentFilter === FILTER_ALL_GENRES_NAME) {
        return films;
      }

      return films.filter((film) => film.genre === currentFilter);
    }
);


export {
  getFilmById,
  getFilmsByGenre,
  getUniqueGenres,
};
