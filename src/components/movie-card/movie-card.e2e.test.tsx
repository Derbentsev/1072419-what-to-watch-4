import MovieCard from './movie-card';
import {films} from '@utils/test-data';


const mock = films[0];

it(`When cursor on the movie card, has movie info`, () => {
  const handleMovieCardMouseEnterSpy = jest.fn();

  const movieCard = shallow(<MovieCard
    film = {mock}
    handleMovieCardMouseEnter = {handleMovieCardMouseEnterSpy}
    renderPlayer = {() => null}
    currentFilter = 'All'
  />);

  const card = movieCard.find(`.small-movie-card`);
  card.simulate(`mouseenter`);
  expect(handleMovieCardMouseEnterSpy.mock.calls.length).toBe(1);
});
