import {extend} from '@utils/';
import {FilterNames} from '@consts/';
import {ActionType} from "./consts";


const initialState = {
  currentFilter: FilterNames.ALL,
};

export const ActionCreator = {
  changeFilter: (currentFilter) => ({
    type: ActionType.CHANGE_FILTER,
    payload: currentFilter,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        currentFilter: action.payload,
      });
  }

  return state;
};


export default reducer;
