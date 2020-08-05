import {extend} from '@utils/utils';
import {createReviews, createPushReview} from '@adapters/reviews';


const PushReviewStatus = {
  SUCCESS: true,
  UNSUCCESS: false,
};

const initialState = {
  reviews: [],
  pushReviewStatus: PushReviewStatus.UNSUCCESS,
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
  setReviewPushStatus: (pushReviewStatus) => {
    return {
      type: ActionType.PUSH_REVIEW,
      payload: pushReviewStatus,
    };
  },
};

const Operation = {
  loadReviews: (filmId) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmId}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(createReviews(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },
  pushReview: (rating, comment, filmId) => (dispatch, getState, api) => {
    return api.post(`/comments/${filmId}`, createPushReview(rating, comment))
      .then(() => {
        dispatch(ActionCreator.setReviewPushStatus(PushReviewStatus.SUCCESS));
      })
      .catch(() => {
        dispatch(ActionCreator.setReviewPushStatus(PushReviewStatus.UNSUCCESS));
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
  PushReviewStatus,
};
