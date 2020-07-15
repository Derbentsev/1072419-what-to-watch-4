import {extend} from '@utils/';
import {FilterNames} from '@consts/';


const initialState = {
  activeFilm: null,
  films: [],
  currentFilter: FilterNames.ALL,
  activeFullVideoPlayer: null,
};

const ActionType = {
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
  CHANGE_FILTER: `CHANGE_FILTER`,
  SET_ACTIVE_FULL_VIDEO_PLAYER: `SET_ACTIVE_FULL_VIDEO_PLAYER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

const ActionCreator = {
  setActiveFilm: (film) => ({
    type: ActionType.SET_ACTIVE_FILM,
    payload: film,
  }),
  changeFilter: (currentFilter) => ({
    type: ActionType.CHANGE_FILTER,
    payload: currentFilter,
  }),
  setActiveFullVideoPlayer: (film) => ({
    type: ActionType.SET_ACTIVE_FULL_VIDEO_PLAYER,
    payload: film,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_FILM:
      return extend(state, {
        activeFilm: action.payload,
      });
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        currentFilter: action.payload,
      });
    case ActionType.SET_ACTIVE_FULL_VIDEO_PLAYER:
      return extend(state, {
        activeFullVideoPlayer: action.payload,
      });
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};


export {
  reducer,
  ActionType,
  ActionCreator
};
