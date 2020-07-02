import {extend} from '@utils/';


const initialState = {
  genre: `all`,
};

const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        
      });

    case ActionType.GET_FILMS_BY_GENRE:
      return extend(state, {

      });
  }

  return state;
};


export {reducer, ActionType};
