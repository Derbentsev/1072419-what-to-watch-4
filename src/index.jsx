import ReactDOM from 'react-dom';
import App from '@components/app/app.connect';
import {TitleMovieSettings} from '@consts/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '@src/reducer/reducer';
import {filmPromo} from '@mocks/films';


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store = {store}>
      <App
        title = {TitleMovieSettings.TITLE}
        genre = {TitleMovieSettings.GENRE}
        dateRelease = {TitleMovieSettings.DATE_RELEASE}
        poster = {TitleMovieSettings.POSTER}
        filmPromo = {filmPromo}
      />
    </Provider>,
    document.querySelector(`#root`)
);
