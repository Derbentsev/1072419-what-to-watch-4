import MoviesList from './movies-list';


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

it(`Render Movies List`, () => {
  const tree = renderer
    .create(<MoviesList
      films = {mocks}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
