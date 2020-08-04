import AddReview from './add-review';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '@reducer/name-space';
import {films} from '@utils/test-data';
import PrivateRoute from '@components/private-route/private-route.connect';
import {AppRoute} from '@consts/';
import {MemoryRouter} from "react-router-dom";
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
      <MemoryRouter initialEntries={[`${AppRoute.REVIEW}/1`]}>
        <PrivateRoute exact path={`${AppRoute.REVIEW}/1`}>
          <AddReview
            setFalseReviewPushStatus = {() => {}}
            pushReview = {() => {}}
            getFilmById = {() => films[0]}
            pushReviewStatus = {true}
            match={{params: {id: films[0].id.toString()}}}
          />
        </PrivateRoute>
      </MemoryRouter>
    </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

