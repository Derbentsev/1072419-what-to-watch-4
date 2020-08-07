import AddReview from './add-review.connect';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '@reducer/name-space';
import {films, mockReviewsStore} from '@utils/test-data';
import {MemoryRouter} from "react-router-dom";
import {
  mockFilmsStore,
  mockUserStore,
} from '@utils/test-data';


const mockStore = configureStore();

it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.FILMS]: mockFilmsStore,
    [NameSpace.REVIEWS]: mockReviewsStore,
    [NameSpace.USER]: mockUserStore,
  });

  const tree = renderer.create(
      <Provider store = {store}>
        <MemoryRouter initialEntries={[`/films/1/review`]}>
          <AddReview
            match={{params: {id: films[0].id.toString()}}}
          />
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
