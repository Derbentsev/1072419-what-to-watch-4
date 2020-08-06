import {reducer, Operation, ActionType} from './films';
import {rawFilms, films} from '@utils/test-data';
import {createAPI} from '@api/api';
import MockAdapter from "axios-mock-adapter";


const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {type: `brr`})).toEqual({
    films: [],
    filmPromo: {},
    favoriteFilms: [],
  });
});

it(`Should make a correct API call to /films`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const filmsLoader = Operation.loadFilms();

  apiMock
    .onGet(`/films`)
    .reply(200, rawFilms);

  return filmsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FILMS,
        payload: films,
      });
    });
});

it(`Should make a correct API call to /favorite`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const filmsLoader = Operation.loadFavoriteFilms();

  apiMock
    .onGet(`/favorite`)
    .reply(200, rawFilms);

  return filmsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FAVORITE_FILMS,
        payload: films,
      });
    });
});

it(`Should make a correct API call to /films/promo`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const filmLoader = Operation.loadFilmPromo();

  apiMock
    .onGet(`/films/promo`)
    .reply(200, rawFilms[0]);

  return filmLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FILM_PROMO,
        payload: films[0],
      });
    });
});
