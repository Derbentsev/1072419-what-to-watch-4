import {extend} from '@utils/';
import {
  createFilms,
  createFilm,
} from '@adapters/films'


const initialState = {
  films: [],
  filmPromo: {},
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_FILM_PROMO: `LOAD_FILM_PROMO`,
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
  }

  return state;
};


export {
  reducer,
  ActionType,
  ActionCreator,
  Operation,
};
