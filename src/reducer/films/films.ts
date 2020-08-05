import {extend} from '@utils/utils';
import {
  createFilms,
  createFilm,
} from '@adapters/films';
import NameSpace from '@reducer/name-space';


const initialState = {
  films: [],
  filmPromo: {},
  favoriteFilms: [],
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_FILM_PROMO: `LOAD_FILM_PROMO`,
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  UPDATE_FILMS: `UPADTE_FILMS`,
  UPDATE_FILM_PROMO: `UPADTE_FILM_PROMO`,
};

const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadFilmPromo: (film) => ({
    type: ActionType.LOAD_FILM_PROMO,
    payload: film,
  }),
  loadFavoriteFilms: (films) => ({
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: films,
  }),
  updateFilms: (film) => ({
    type: ActionType.UPDATE_FILMS,
    payload: film,
  }),
  updateFilmPromo: (film) => ({
    type: ActionType.UPDATE_FILM_PROMO,
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

  loadFavoriteFilms: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavoriteFilms(createFilms(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },

  updateFilm: (isFavorite, filmId) => (dispatch, getState, api) => {
    return api.post(`/favorite/${filmId}/${isFavorite}`)
      .then((response) => {
        if (response.data.id === getState()[NameSpace.FILMS].filmPromo.id) {
          dispatch(ActionCreator.updateFilmPromo(createFilm(response.data)));
        }

        const films = getState()[NameSpace.FILMS].films.slice();
        const elementIndex = films.findIndex((x) => x.id === response.data.id);

        films[elementIndex] = createFilm(response.data);
        dispatch(ActionCreator.updateFilms(films));
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
    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload,
      });
    case ActionType.UPDATE_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.UPDATE_FILM_PROMO:
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
