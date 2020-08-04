import {reducer} from './films';


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {type: `brr`})).toEqual({
    films: [],
    filmPromo: {},
    favoriteFilms: [],
  });
});
