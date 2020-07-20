import Main from './main.connect';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '@reducer/name-space';
import {
  mockFilmsStore,
  mockPlayerStore,
  mockFilterStore,
  mockUserStore,
} from '@utils/test-data';


const mockStore = configureStore([]);

it(`Should Main screen render correctly`, () => {
  const store = mockStore({
    [NameSpace.FILMS]: mockFilmsStore,
    [NameSpace.PLAYER]: mockPlayerStore,
    [NameSpace.FILTER]: mockFilterStore,
    [NameSpace.USER]: mockUserStore,
  });

  const tree = renderer
    .create(
        <Provider store = {store}>
          <Main/>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
