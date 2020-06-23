import {MovieCard} from './movie-card';


const mocks = {
  title: `title1`,
  poster: `image1`,
};

it(`When cursor on the movie card, has movie info`, () => {
  const film = mocks;
  const onMovieCardMouseOverSpy = jest.fn();

  const movieCard = shallow(<MovieCard
    film = {film}
    onMovieCardMouseOver = {onMovieCardMouseOverSpy}
    onMovieCardClick = {() => {}}
  />);

  const card = movieCard.find(`.small-movie-card`);
  card.props().onMouseOver();

  expect(onMovieCardMouseOverSpy.mock.calls.length).toBe(1);
});

it(`When mouse click on movie card`, () => {
  const film = mocks;
  const onMovieCardClickSpy = jest.fn();

  const movieCard = shallow(<MovieCard
    film = {film}
    onMovieCardMouseOver = {() => {}}
    onMovieCardClick = {onMovieCardClickSpy}
  />);

  const cardPoster = movieCard.find(`.small-movie-card__poster`);
  const cardTitle = movieCard.find(`.small-movie-card__link`);

  cardPoster.props().onClick();
  cardTitle.props().onClick({preventDefault() {}});

  expect(onMovieCardClickSpy.mock.calls.length).toBe(2);
});
