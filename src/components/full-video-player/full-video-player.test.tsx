import FullVideoPlayer from './full-video-player';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '@reducer/name-space';
import {films} from '@utils/test-data';
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
      <FullVideoPlayer
        getFilmById = {() => films[0]}
        match={{params: {id: films[0].id.toString()}}}
      />
    </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
