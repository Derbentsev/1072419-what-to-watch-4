import {reducer, AuthorizationStatus, ActionCreator, ActionType, Operation} from './user';
import {extend} from '@utils/utils';
import {createAPI} from '@api/api';
import MockAdapter from 'axios-mock-adapter';
import {user, rawUser} from '@utils/test-data';


const testUserStore = {
  authorizationStatus: `NO_AUTH`,
  authorizationError: ``,
};

const mockUserData = {
  login: `Oliver.conner@gmail.com`,
  password: `12345678`,
};

const api = createAPI(() => {});
const apiMock = new MockAdapter(api);

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {type: `brr`})).toEqual({
    authorizationStatus: `PENDING`,
    authorizationError: ``,
  });
});

it(`Require Authorization action is correct`, () => {
  const result = extend(testUserStore, {
    authorizationStatus: AuthorizationStatus.AUTH,
    authorizationError: ``,
  });

  expect(reducer(testUserStore, ActionCreator.requireAuthorization(`AUTH`)))
    .toEqual(result);
});

it(`Set Authorization Error action is correct`, () => {
  const result = extend(testUserStore, {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authorizationError: `NO_AUTH`,
  });

  expect(reducer(testUserStore, ActionCreator.setAuthorizationError(`NO_AUTH`)))
    .toEqual(result);
});

it(`checkAuth option is correct`, function () {
  const dispatch = jest.fn();
  const userLoader = Operation.checkAuth();

  apiMock
    .onGet(`/login`)
    .reply(200, user);

  return userLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.SET_AUTHORIZATION_STATUS,
        payload: `AUTH`,
      });
    });
});

it(`login option is correct`, function () {
  const dispatch = jest.fn();
  const userLoader = Operation.login(mockUserData);

  apiMock
    .onPost(`/login`, user)
    .reply(200, user);

  return userLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: `AUTH`,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.SET_AUTHORIZATION_ERROR,
        payload: ``,
      });
    });
});
