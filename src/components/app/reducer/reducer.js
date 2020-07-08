import {extend} from '@utils/';
import filmsAll from '@mocks/films';
import {START_FILMS_CARD_COUNT} from '@consts/';


const initialState = {
  activeFilm: null,
  films: filmsAll,
  showedFilmsCount: START_FILMS_CARD_COUNT,
};

const ActionType = {
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
  SET_SHOWED_FILMS_COUNT: `SET_SHOWED_FILMS_COUNT`,
  RESET_SHOWED_FILMS_COUNT: `RESET_SHOWED_FILMS_COUNT`,
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
  resetShowedFilmsCount: () => ({
    type: ActionType.RESET_SHOWED_FILMS_COUNT,
    payload: 0,
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
    case ActionType.RESET_SHOWED_FILMS_COUNT:
      return extend(state, {
        showedFilmsCount: START_FILMS_CARD_COUNT,
      });
  }

  return state;
};


export default reducer;
export {ActionType, ActionCreator};
