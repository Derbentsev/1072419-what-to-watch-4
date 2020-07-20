import MoviePage from './movie-page.connect';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '@reducer/name-space';
import {
  mockFilmsStore,
  mockPlayerStore,
  mockFilterStore,
  mockUserStore,
} from '@utils/test-data';


const mockStore = configureStore();

it(`Render Movie Page`, () => {
  const store = mockStore({
    [NameSpace.FILMS]: mockFilmsStore,
    [NameSpace.PLAYER]: mockPlayerStore,
    [NameSpace.FILTER]: mockFilterStore,
    [NameSpace.USER]: mockUserStore,
    handleOnPlayClick: () => {}
  });

  const tree = renderer
    .create(
        <Provider store = {store}>
          <MoviePage/>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
