import {extend} from '@utils/';
import {createReviews} from '@adapters/reviews';


const initialState = {
  reviews: [],
};

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

const ActionCreator = {
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },
};

const Operation = {
  loadReviews: () => (dispatch, getState, api) => {
    return api.get(`/comments/filmId`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(createReviews(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};


export {
  ActionType,
  ActionCreator,
  Operation,
  reducer,
};
