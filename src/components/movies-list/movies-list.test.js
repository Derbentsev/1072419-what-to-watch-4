import MoviesList from './movies-list';


const mocks = [
  {
    title: `title1`,
    poster: `image1`,
  },
  {
    title: `title2`,
    poster: `image2`,
  },
  {
    title: `title3`,
    poster: `image3`,
  },
];

it(`Render Movies List`, () => {
  const tree = renderer
    .create(<MoviesList
      films = {mocks}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
