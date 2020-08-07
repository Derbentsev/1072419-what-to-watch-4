import UserLogo from './user-logo';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '@reducer/name-space';
import {mockUserStore} from '@utils/test-data';
import {MemoryRouter} from "react-router-dom";


const mockStore = configureStore();
const authStatus = `AUTH`;

it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.USER]: mockUserStore,
  });

  const tree = renderer.create(
      <MemoryRouter>
        <Provider store = {store}>
          <UserLogo
            authorizationStatus = {authStatus}
          />
        </Provider>
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
