import {extend} from '@utils/';
import filmsAll from '@mocks/films';


const initialState = {
  activeFilm: null,
  films: filmsAll,
  showedFilmsCount: 0,
};

const ActionType = {
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
  SET_SHOWED_FILMS_COUNT: `SET_SHOWED_FILMS_COUNT`
};

const ActionCreator = {
  setActiveFilm: (film) => ({
    type: ActionType.SET_ACTIVE_FILM,
    payload: film,
  }),
  setShowedFilmsCount: (count) => ({
    type: ActionType.SET_SHOWED_FILMS_COUNT,
    payload: count,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_FILM:
      return extend(state, {
        activeFilm: action.payload,
      });
    case ActionType.SET_SHOWED_FILMS_COUNT:
      return extend(state, {
        showedFilmsCount: state.showedFilmsCount + action.payload,
      });
  }

  return state;
};


export default reducer;
export {ActionType, ActionCreator};
