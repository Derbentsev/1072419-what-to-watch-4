import {extend} from '@utils/';
import {FilterNames} from '@consts/';


const initialState = {
  currentFilter: FilterNames.ALL,
  filteredFilms: null,
};

const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  SET_FILTERED_FILMS: `GET_FILTERED_FILMS`,
};

const ActionCreator = {
  changeFilter: (currentFilter) => ({
    type: ActionType.CHANGE_FILTER,
    payload: currentFilter,
  }),
  setFilteredFilms: (filteredFilms) => ({
    type: ActionType.SET_FILTERED_FILMS,
    payload: filteredFilms,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        currentFilter: action.payload,
      });

    case ActionType.SET_FILTERED_FILMS:
      return extend(state, {
        filteredFilms: action.payload,
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
