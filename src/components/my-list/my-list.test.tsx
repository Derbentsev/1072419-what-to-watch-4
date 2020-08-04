import MyList from './my-list';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '@reducer/name-space';
import {films} from '@utils/test-data';
import {
  mockFilmsStore,
  mockFilterStore,
  mockUserStore,
} from '@utils/test-data';


const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.FILMS]: mockFilmsStore,
    [NameSpace.FILTER]: mockFilterStore,
    [NameSpace.USER]: mockUserStore,
  });

  const tree = renderer.create(
    <Provider store = {store}>
      <MyList
        loadFavoriteFilms = {() => {}}
        favoriteFilms = {films}
      />
    </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

