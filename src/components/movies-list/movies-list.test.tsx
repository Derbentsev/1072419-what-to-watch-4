import MoviesList from './movies-list';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {films} from '@utils/test-data';


const mockStore = configureStore([]);

it(`Render Movies List`, () => {
  const store = mockStore({
    films,
    showedFilmsCount: 8,
    currentFilter: `filter1`,
  });

  const tree = renderer
    .create(
        <Provider store = {store}>
          <MoviesList
            films = {films}
            handleMovieCardMouseEnter = {() => {}}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
