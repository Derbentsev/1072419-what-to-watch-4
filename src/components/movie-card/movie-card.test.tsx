import MovieCard from './movie-card';
import {films} from '@utils/test-data';


const mock = films[0];

it(`Render Movie Card`, () => {
  const onMovieCardMouseEnterSpy = jest.fn();

  const tree = renderer
    .create(<MovieCard
      film = {mock}
      handleMovieCardMouseEnter = {onMovieCardMouseEnterSpy}
      renderPlayer = {() => {}}
      currentFilter = 'All'
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
