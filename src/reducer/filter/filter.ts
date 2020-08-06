import {extend} from '@utils/utils';
import {FilterName} from '@consts';


const initialState = {
  currentFilter: FilterName.ALL,
};

const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
};

const ActionCreator = {
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


export {
  reducer,
  ActionType,
  ActionCreator,
};
