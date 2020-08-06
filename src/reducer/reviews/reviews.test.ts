import {reducer} from './reviews';


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {type: `brr`})).toEqual({
    reviews: [],
    pushReviewStatus: false,
  });
});
