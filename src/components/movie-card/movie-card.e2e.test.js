import {MovieCard} from './movie-card';


const mock = {
  title: `title1`,
  image: `image1`,
};

it(`When cursor on the movie card, has movie info`, () => {
  const film = mock;
  const onMovieCardMouseOverSpy = jest.fn();

  const movieCard = shallow(<MovieCard
    film = {film}
    onMovieCardMouseOver = {onMovieCardMouseOverSpy}
  />);

  const card = movieCard.find(`.small-movie-card`);
  card.props().onMouseOver();

  expect(onMovieCardMouseOverSpy.mock.calls.length).toBe(1);
  expect(onMovieCardMouseOverSpy.mock.calls[0][0]).toBe(`title1`);
});
