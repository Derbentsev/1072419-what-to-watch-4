import ReactDOM from 'react-dom';
import {App} from '@components/app';
import {
  TitleMovieSettings,
  MovieSettings,
} from '@consts/consts';


ReactDOM.render(
    <App
      title = {TitleMovieSettings.TITLE}
      genre = {TitleMovieSettings.GENRE}
      dateRelease = {TitleMovieSettings.DATE_RELEASE}
      titles = {MovieSettings.TITLES}
    />,
    document.querySelector(`#root`)
);
