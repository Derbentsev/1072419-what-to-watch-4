import {extend} from '@utils/';
import {
  createFilms,
  createFilm,
} from '@adapters/films';


const initialState = {
  films: [],
  filmPromo: {},
  activeFilm: null,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_FILM_PROMO: `LOAD_FILM_PROMO`,
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  },
  loadFilmPromo: (film) => {
    return {
      type: ActionType.LOAD_FILM_PROMO,
      payload: film,
    };
  },
  setActiveFilm: (film) => ({
    type: ActionType.SET_ACTIVE_FILM,
    payload: film,
  }),
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(createFilms(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },

  loadFilmPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadFilmPromo(createFilm(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_FILM_PROMO:
      return extend(state, {
        filmPromo: action.payload,
      });
    case ActionType.SET_ACTIVE_FILM:
      return extend(state, {
        activeFilm: action.payload,
      });
  }

  return state;
};


export {
  reducer,
  ActionType,
  ActionCreator,
  Operation,
};
