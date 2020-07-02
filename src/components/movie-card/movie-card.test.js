import MovieCard from './movie-card';


const mock = {
  title: `title1`,
  poster: `image1`,
  src: `src1`,
};

it(`Render Movie Card`, () => {
  const onMovieCardMouseEnterSpy = jest.fn();

  const tree = renderer
    .create(<MovieCard
      film = {mock}
      onMovieCardMouseEnter = {onMovieCardMouseEnterSpy}
      onMovieCardClick = {() => {}}
      renderPlayer = {() => {}}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
