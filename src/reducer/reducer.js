import {extend} from '@utils/';
import filmsAll from '@mocks/films';
import {
  FilterNames,
  START_FILMS_CARD_COUNT,
} from '@consts/';


const initialState = {
  activeFilm: null,
  films: filmsAll,
  showedFilmsCount: START_FILMS_CARD_COUNT,
  currentFilter: FilterNames.ALL,
};

const ActionType = {
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
  SET_SHOWED_FILMS_COUNT: `SET_SHOWED_FILMS_COUNT`,
  RESET_SHOWED_FILMS_COUNT: `RESET_SHOWED_FILMS_COUNT`,
  CHANGE_FILTER: `CHANGE_FILTER`,
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
    payload: START_FILMS_CARD_COUNT,
  }),
  changeFilter: (currentFilter) => ({
    type: ActionType.CHANGE_FILTER,
    payload: currentFilter,
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
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        currentFilter: action.payload,
      });
  }

  return state;
};


export default reducer;
export {ActionType, ActionCreator};
