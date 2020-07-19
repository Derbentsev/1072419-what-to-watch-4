import ReactDOM from 'react-dom';
import App from '@components/app/app.connect';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from '@reducer/reducer';
import thunk from 'redux-thunk';
import {createAPI} from '@api/api';
import {Operation as DataOperation} from '@reducer/films/films';

const api = createAPI();

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.loadFilmPromo());

ReactDOM.render(
    <Provider store = {store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
