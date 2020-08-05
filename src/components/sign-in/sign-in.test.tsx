import SignIn from './sign-in.connect';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '@reducer/name-space';
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
    <MemoryRouter>
      <Provider store = {store}>
        <SignIn/>
      </Provider>
    </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
