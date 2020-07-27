import {extend} from '@utils/';
import {createReviews, createPushReview} from '@adapters/reviews';
import {ActionCreator as PageActionCreator} from '@reducer/page/page';


const initialState = {
  reviews: [],
  pushReviewStatus: ``,
};

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  PUSH_REVIEW: `PUSH_REVIEW`,
};

const ActionCreator = {
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },
  pushReview: (pushReviewStatus) => {
    return {
      type: ActionType.PUSH_REVIEW,
      payload: pushReviewStatus,
    };
  },
};

const Operation = {
  loadReviews: () => (dispatch, getState, api) => {
    return api.get(`/comments/${getState().FILMS.activeFilm.id}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(createReviews(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },
  pushReview: (form) => (dispatch, getState, api) => {
    return api.post(`/comments/${getState().FILMS.activeFilm.id}`, createPushReview(form))
      .then((response) => {
        dispatch(ActionCreator.pushReview(response.status));
        dispatch(PageActionCreator.setActivePage(``));
      })
      .catch((err) => {
        dispatch(ActionCreator.pushReview(err));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.PUSH_REVIEW:
      return extend(state, {
        pushReviewStatus: action.payload,
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
