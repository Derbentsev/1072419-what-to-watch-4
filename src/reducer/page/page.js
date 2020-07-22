import {extend} from '@utils/';


const PageName = {
  ADD_REVIEW: `ADD_REVIEW`,
};

const initialState = {
  activePage: ``,
};

const ActionType = {
  SET_ACTIVE_PAGE: `SET_ACTIVE_PAGE`,
};

const ActionCreator = {
  setActivePage: (pageName) => {
    return {
      type: ActionType.SET_ACTIVE_PAGE,
      payload: pageName,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_PAGE:
      return extend(state, {
        activePage: action.payload,
      });
  }

  return state;
};


export {
  PageName,
  ActionType,
  ActionCreator,
  reducer,
};
