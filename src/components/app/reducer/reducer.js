import {extend} from '@utils/';
import filmsAll from '@mocks/films';


const initialState = {
  activeFilm: null,
  films: filmsAll,
};

const ActionType = {
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
};

const ActionCreator = {
  setActiveFilm: (film) => ({
    type: ActionType.SET_ACTIVE_FILM,
    payload: film,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_FILM:
      return extend(state, {
        activeFilm: action.payload,
      });
  }

  return state;
};


export default reducer;
export {ActionType, ActionCreator};
