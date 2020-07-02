import MovieCard from './movie-card';


const mocks = {
  title: `title1`,
  poster: `image1`,
  src: `src1`,
};

it(`When cursor on the movie card, has movie info`, () => {
  const onMovieCardMouseEnterSpy = jest.fn();

  const movieCard = shallow(<MovieCard
    film = {mocks}
    onMovieCardMouseEnter = {onMovieCardMouseEnterSpy}
    onMovieCardClick = {() => {}}
    renderPlayer = {() => {}}
  />);

  const card = movieCard.find(`.small-movie-card`);
  card.props().onMouseEnter();

  expect(onMovieCardMouseEnterSpy.mock.calls.length).toBe(1);
});

it(`When mouse click on movie card`, () => {
  const onMovieCardClickSpy = jest.fn();

  const movieCard = shallow(<MovieCard
    film = {mocks}
    onMovieCardMouseEnter = {() => {}}
    onMovieCardClick = {onMovieCardClickSpy}
    renderPlayer = {() => {}}
  />);

  const movieCardElement = movieCard.find(`.small-movie-card`);
  movieCardElement.props().onClick({preventDefault() {}});

  expect(onMovieCardClickSpy.mock.calls.length).toBe(1);
});
