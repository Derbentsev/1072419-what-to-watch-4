import ReactDOM from 'react-dom';
import App from '@components/app/app';
import films from '@mocks/films';
import {TitleMovieSettings} from '@consts/consts';


ReactDOM.render(
    <App
      title = {TitleMovieSettings.TITLE}
      genre = {TitleMovieSettings.GENRE}
      dateRelease = {TitleMovieSettings.DATE_RELEASE}
      films = {films}
    />,
    document.querySelector(`#root`)
);
