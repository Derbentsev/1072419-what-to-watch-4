import App from './app.connect';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '@reducer/name-space';
import {
  mockFilmsStore,
  mockPlayerStore,
  mockFilterStore,
  mockUserStore,
  mockPageStore,
} from '@utils/test-data';


const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.FILMS]: mockFilmsStore,
    [NameSpace.PLAYER]: mockPlayerStore,
    [NameSpace.FILTER]: mockFilterStore,
    [NameSpace.USER]: mockUserStore,
    [NameSpace.PAGE]: mockPageStore,
  });

  const tree = renderer
    .create(
        <Provider store = {store}>
          <App/>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
