import MovieCard from './movie-card';


const mocks = {
  title: `title1`,
  poster: `image1`,
  src: `src1`,
};

it(`When cursor on the movie card, has movie info`, () => {
  const handleMovieCardMouseEnterSpy = jest.fn();

  const movieCard = shallow(<MovieCard
    film = {mocks}
    handleMovieCardMouseEnter = {handleMovieCardMouseEnterSpy}
    handleMovieCardClick = {() => {}}
    renderPlayer = {() => {}}
  />);

  const card = movieCard.find(`.small-movie-card`);
  card.props().onMouseEnter();

  expect(handleMovieCardMouseEnterSpy.mock.calls.length).toBe(1);
});

it(`When mouse click on movie card`, () => {
  const handleMovieCardClickSpy = jest.fn();

  const movieCard = shallow(<MovieCard
    film = {mocks}
    handleMovieCardMouseEnter = {() => {}}
    handleMovieCardClick = {handleMovieCardClickSpy}
    renderPlayer = {() => {}}
  />);

  const movieCardElement = movieCard.find(`.small-movie-card`);
  movieCardElement.props().onClick({preventDefault() {}});

  expect(handleMovieCardClickSpy.mock.calls.length).toBe(1);
});
