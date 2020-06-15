import {Main} from './main';
import {
  TitleMovieSettings,
  MovieSettings,
} from '@consts/consts';


it(`Should Main screen render correctly`, () => {
  const tree = renderer
    .create(<Main
      title = {TitleMovieSettings.TITLE}
      genre = {TitleMovieSettings.GENRE}
      dateRelease = {TitleMovieSettings.DATE_RELEASE}
      titles = {MovieSettings.TITLES}
      onTitleClick = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
