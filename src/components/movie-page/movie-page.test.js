import MoviePage from './movie-page.connect';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '@reducer/name-space';
import {
  mockFilmsStore,
  mockPlayerStore,
  mockFilterStore,
  mockUserStore,
  mockReviewsStore,
} from '@utils/test-data';


const mockStore = configureStore([]);

it(`Render Movie Page`, () => {
  const store = mockStore({
    [NameSpace.FILMS]: mockFilmsStore,
    [NameSpace.PLAYER]: mockPlayerStore,
    [NameSpace.FILTER]: mockFilterStore,
    [NameSpace.USER]: mockUserStore,
    [NameSpace.REVIEWS]: mockReviewsStore,
  });

  const tree = renderer
    .create(
        <Provider store = {store}>
          <MoviePage
            loadReviews={()=>{}}
            setActivePage={()=>{}}
            handleOnPlayClick={()=>{}}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
