import {reducer, Operation, ActionType} from './reviews';
import {rawReviews, reviews} from '@utils/test-data';
import {createAPI} from '@api/api';
import MockAdapter from "axios-mock-adapter";


const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {type: `brr`})).toEqual({
    reviews: [],
    pushReviewStatus: false,
  });
});

it(`Should make a correct API call to /comments/`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const reviewsLoader = Operation.loadReviews(1);

  apiMock
    .onGet(`/comments/1`)
    .reply(200, rawReviews);

  return reviewsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_REVIEWS,
        payload: reviews,
      });
    });
});

it(`Should make a correct API call to push comment to /comments/:filmId`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const reviewsLoader = Operation.pushReview(1, `Good`, 1);

  apiMock
    .onPost(`/comments/1`, {rating: 1, comment: `Good`})
    .reply(200, rawReviews);

  return reviewsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.PUSH_REVIEW,
        payload: true,
      });
    });
});
