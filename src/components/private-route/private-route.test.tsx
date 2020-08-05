import PrivateRoute from './private-route.connect';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '@reducer/name-space';
import {MemoryRouter} from 'react-router-dom';
import {
  mockUserStore,
} from '@utils/test-data';


const mockStore = configureStore();

it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.USER]: mockUserStore,
  });

  const tree = renderer.create(
    <MemoryRouter>
      <Provider store = {store}>
        <PrivateRoute/>
      </Provider>
    </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});


