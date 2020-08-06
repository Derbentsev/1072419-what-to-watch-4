import {reducer} from './filter';


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {type: `brr`})).toEqual({
    currentFilter: `All genres`,
  });
});
