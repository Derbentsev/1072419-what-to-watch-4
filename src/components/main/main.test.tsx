import Main from './main.connect';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '@reducer/name-space';
import {MemoryRouter} from "react-router-dom";
import {
  mockFilmsStore,
  mockFilterStore,
  mockUserStore,
} from '@utils/test-data';


const mockStore = configureStore([]);

it(`Should Main screen render correctly`, () => {
  const store = mockStore({
    [NameSpace.FILMS]: mockFilmsStore,
    [NameSpace.FILTER]: mockFilterStore,
    [NameSpace.USER]: mockUserStore,
  });

  const tree = renderer
    .create(
        <MemoryRouter>
          <Provider store = {store}>
            <Main/>
          </Provider>
        </MemoryRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
