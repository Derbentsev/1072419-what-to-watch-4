import {reducer} from './user';


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {type: `brr`})).toEqual({
    authorizationStatus: `PENDING`,
    authorizationError: ``,
  });
});
