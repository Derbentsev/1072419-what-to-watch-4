import MyList from './my-list';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '@reducer/name-space';
import {films} from '@utils/test-data';
import {MemoryRouter} from "react-router-dom";
import {
  mockFilmsStore,
  mockUserStore,
} from '@utils/test-data';


const mockStore = configureStore();

it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.FILMS]: mockFilmsStore,
    [NameSpace.USER]: mockUserStore,
  });

  const tree = renderer.create(
    <Provider store = {store}>
      <MemoryRouter>
        <MyList
          loadFavoriteFilms = {() => {}}
          favoriteFilms = {films}
        />
      </MemoryRouter>
    </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

