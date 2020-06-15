import {
  TitleMovieSettings,
  MovieSettings,
} from '@consts/consts';


it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();

  const mainScreen = shallow(
      <Main
        title = {TitleMovieSettings.TITLE}
        genre = {TitleMovieSettings.GENRE}
        dateRelease = {TitleMovieSettings.DATE_RELEASE}
        titles = {MovieSettings.TITLES}
        onTitleClick = {onTitleClick}
      />
  );

  const title = mainScreen.find(`movie-card__desc`);

  title.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
});
