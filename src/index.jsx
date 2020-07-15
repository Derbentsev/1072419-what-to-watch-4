import ReactDOM from 'react-dom';
import App from '@components/app/app.connect';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from '@reducer/reducer';
import {filmPromo} from '@mocks/films';
import thunk from 'redux-thunk';
import {createAPI} from '@api/api';
import {AuthorizationStatus} from '@consts/';
import {Operation as DataOperation} from '@reducer/data/data';
import {Operation as UserOperation, ActionCreator} from '@reducer/user/user';


const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadFilms());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store = {store}>
      <App
        filmPromo = {filmPromo}
      />
    </Provider>,
    document.querySelector(`#root`)
);
