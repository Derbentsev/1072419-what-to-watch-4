import MoviePage from './movie-page';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '@reducer/name-space';
import {MemoryRouter} from 'react-router-dom';
import {
  mockFilmsStore,
  mockUserStore,
  mockReviewsStore,
  films,
} from '@utils/test-data';


const mockStore = configureStore();
const authStatus = `AUTH`

it(`Render Movie Page`, () => {
  const store = mockStore({
    [NameSpace.FILMS]: mockFilmsStore,
    [NameSpace.USER]: mockUserStore,
    [NameSpace.REVIEWS]: mockReviewsStore,
  });

  const tree = renderer
    .create(
        <MemoryRouter>
          <Provider store = {store}>
            <MoviePage
              films = {films}
              authorizationStatus = {authStatus}
              match={{params: {id: `3`}}}
              loadReviews={() => {}}
              setFavoriteFilm={() => {}}
              getFilmById={() => films[0]}
            />
          </Provider>
        </MemoryRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
