import MoviesList from './movies-list';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';


const films = [
  {
    title: `title1`,
    poster: `image1`,
    src: `src1`,
  },
  {
    title: `title2`,
    poster: `image2`,
    src: `src2`,
  },
  {
    title: `title3`,
    poster: `image3`,
    src: `src3`,
  },
];

const mockStore = configureStore([]);

it(`Render Movies List`, () => {
  const store = mockStore({
    activeFilm: null,
    films,
    showedFilmsCount: 8,
    currentFilter: `filter1`,
  });

  const tree = renderer
    .create(
        <Provider store = {store}>
          <MoviesList
            films = {films}
            handleMovieCardMouseEnter = {() => {}}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
