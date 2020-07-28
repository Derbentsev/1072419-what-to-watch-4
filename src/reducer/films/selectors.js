import NameSpace from '@reducer/name-space';
import {FilterName} from '@consts/';
import {createSelector} from 'reselect';


const getUniqueGenres = (films) => {
  return films.map((film) => film.genre)
    .filter((value, index, self) => self.indexOf(value) === index);
};

const getFilms = (state) => {
  return state[NameSpace.FILMS].films;
};

const getCurrentFilter = (state) => {
  return state[NameSpace.FILTER].currentFilter;
};

const getFilmId = (state, filmId) => {
  return parseInt(filmId, 10);
};

const getFilmsByGenre = createSelector(
    getFilms,
    getCurrentFilter,
    (films, currentFilter) => {
      if (currentFilter === FilterName.ALL) {
        return films;
      }

      return films.filter((film) => film.genre === currentFilter);
    }
);

const getFilmById = createSelector(
    getFilmId,
    getFilms,
    (filmId, films) => {
      return films.find((film) => film.id === filmId);
    }
);


export {
  getFilmById,
  getFilmsByGenre,
  getUniqueGenres,
};
