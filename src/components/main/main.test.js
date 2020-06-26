import Main from './main';

const mocks = [
  {
    title: `title1`,
    poster: `image1`,
    src: `src1`,
  },
  {
    title: `title2`,
    poster: `image2`,
    src: `src2`,
  },
  {
    title: `title3`,
    poster: `image3`,
    src: `src3`,
  },
];


it(`Should Main screen render correctly`, () => {
  const tree = renderer
    .create(<Main
      title = 'On The Moon'
      genre = 'comedy'
      dateRelease = '01.01.2020'
      films = {mocks}
      onTitleClick = {() => {}}
      onMovieCardClick = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
