import {extend, isValidEmail, isValidPassword} from '@utils/';
import {ErrorMessage} from '@consts/';


const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationError: ``,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_AUTHORIZATION_ERROR: `SET_AUTHORIZATION_ERROR`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  setAuthorizationError: (errorMessage) => {
    return {
      type: ActionType.SET_AUTHORIZATION_ERROR,
      payload: errorMessage,
    };
  },
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    if (!isValidEmail(authData.login)) {
      dispatch(ActionCreator.setAuthorizationError(ErrorMessage.LOGIN));
      return () => {};
    } else if (!isValidPassword(authData.password)) {
      dispatch(ActionCreator.setAuthorizationError(ErrorMessage.PASSWORD));
      return () => {};
    }

    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setAuthorizationError(``));
      })
      .catch((err) => {
        const {response} = err;
        dispatch(ActionCreator.setAuthorizationError(response.data.error));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_AUTHORIZATION_ERROR:
      return extend(state, {
        authorizationError: action.payload,
      });
  }

  return state;
};


export {
  AuthorizationStatus,
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
