import ReactDOM from 'react-dom';
import App from '@components/app/app.connect';
import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from 'react-redux';
import reducer from '@reducer/reducer';
import thunk from 'redux-thunk';
import {createAPI} from '@api/api';
import {
  ActionCreator as UserActionCreator,
  AuthorizationStatus,
} from '@reducer/user/user';


const onUnauthorized = () => {
  store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store = {store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
