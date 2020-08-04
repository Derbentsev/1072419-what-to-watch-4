import MoviePage from './movie-page.connect';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '@reducer/name-space';
import {MemoryRouter} from 'react-router-dom';
import {
  mockFilmsStore,
  mockFilterStore,
  mockUserStore,
  mockReviewsStore,
} from '@utils/test-data';


const mockStore = configureStore([]);

it(`Render Movie Page`, () => {
  const store = mockStore({
    [NameSpace.FILMS]: mockFilmsStore,
    [NameSpace.FILTER]: mockFilterStore,
    [NameSpace.USER]: mockUserStore,
    [NameSpace.REVIEWS]: mockReviewsStore,
  });

  const tree = renderer
    .create(
        <MemoryRouter>
          <Provider store = {store}>
            <MoviePage
              match={{params: {id: `3`}}}
            />
          </Provider>
        </MemoryRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
