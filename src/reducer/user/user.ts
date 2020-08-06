import {extend, isValidEmail, isValidPassword} from '@utils/utils';


const ErrorMessage = {
  LOGIN: `Введите корректный email`,
  PASSWORD: `Введите корректный пароль`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  PENDING: `PENDING`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.PENDING,
  authorizationError: ``,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_AUTHORIZATION_ERROR: `SET_AUTHORIZATION_ERROR`,
  SET_AUTHORIZATION_STATUS: `SET_AUTHORIZATION_STATUS`,
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
  setAuthorizationStatus: (status) => {
    return {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: status,
    };
  },
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
      })
      .catch(() => {
        dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
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
    case ActionType.SET_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload,
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
  ErrorMessage,
};
