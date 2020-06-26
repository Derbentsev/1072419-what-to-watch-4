import {MovieCard} from './movie-card';


const mocks = {
  title: `title1`,
  poster: `image1`,
  src: `src1`,
};

it(`When cursor on the movie card, has movie info`, () => {
  const film = mocks;
  const onMovieCardMouseEnterSpy = jest.fn();

  const movieCard = shallow(<MovieCard
    film = {film}
    onMovieCardMouseEnter = {onMovieCardMouseEnterSpy}
    onMovieCardClick = {() => {}}
  />);

  const card = movieCard.find(`.small-movie-card`);
  card.props().onMouseEnter();

  expect(onMovieCardMouseEnterSpy.mock.calls.length).toBe(1);
});

it(`When mouse click on movie card`, () => {
  const film = mocks;
  const onMovieCardClickSpy = jest.fn();

  const movieCard = shallow(<MovieCard
    film = {film}
    onMovieCardMouseEnter = {() => {}}
    onMovieCardClick = {onMovieCardClickSpy}
  />);

  const movieCardElement = movieCard.find(`.small-movie-card`);
  movieCardElement.props().onClick({preventDefault() {}});

  expect(onMovieCardClickSpy.mock.calls.length).toBe(1);
});
