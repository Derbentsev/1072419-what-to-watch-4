import Main from './main';

const mocks = [
  {
    title: `title1`,
    image: `image1`,
  },
  {
    title: `title1`,
    image: `image1`,
  },
  {
    title: `title1`,
    image: `image1`,
  },
];


it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();

  const mainScreen = shallow(
      <Main
        title = 'On The Moon'
        genre = 'comedy'
        dateRelease = '01.01.2020'
        films = {mocks}
        onTitleClick = {onTitleClick}
      />
  );

  const title = mainScreen.find(`.movie-card__title`);

  title.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
});
