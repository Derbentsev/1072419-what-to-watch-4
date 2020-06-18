import MovieCard from './movie-card';


const mock = {
  title: `title1`,
  image: `image1`,
};

it(`Render Movie Card`, () => {
  const tree = renderer
    .create(<MovieCard
      film = {mock}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
