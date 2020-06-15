import {App} from './app.jsx';
import {
  TitleMovieSettings,
  MovieSettings,
} from '@consts/consts';


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      title = {TitleMovieSettings.TITLE}
      genre = {TitleMovieSettings.GENRE}
      dateRelease = {TitleMovieSettings.DATE_RELEASE}
      titles = {MovieSettings.TITLES}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
