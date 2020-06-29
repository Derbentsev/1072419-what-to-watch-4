import MoviesList from './movies-list';


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

it(`Render Movies List`, () => {
  const tree = renderer
    .create(<MoviesList
      films = {mocks}
      onMovieCardClick = {() => {}}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
