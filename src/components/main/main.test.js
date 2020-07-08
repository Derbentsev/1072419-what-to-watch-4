import Main from './main';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';


const films = [
  {
    title: `title1`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `genre1`,
    dateRelease: `2011`,
    cover: `the-grand-budapest-hotel-poster.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    director: `director1`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    ratingScore: `1`,
    ratingLevel: `very good`,
    ratingCount: `240`,
    description: `description1`,
    runTime: `1h 29m`,
    reviews: [
      {
        comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        rating: `8.9`,
        author: `Kate Muir`,
        date: `December 24, 2016`,
      },
    ]
  },
  {
    title: `title1`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `genre1`,
    dateRelease: `2011`,
    cover: `the-grand-budapest-hotel-poster.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    director: `director1`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    ratingScore: `1`,
    ratingLevel: `very good`,
    ratingCount: `240`,
    description: `description1`,
    runTime: `1h 29m`,
    reviews: [
      {
        comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        rating: `8.9`,
        author: `Kate Muir`,
        date: `December 24, 2016`,
      },
    ]
  },
  {
    title: `title1`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `genre1`,
    dateRelease: `2011`,
    cover: `the-grand-budapest-hotel-poster.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    director: `director1`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    ratingScore: `1`,
    ratingLevel: `very good`,
    ratingCount: `240`,
    description: `description1`,
    runTime: `1h 29m`,
    reviews: [
      {
        comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        rating: `8.9`,
        author: `Kate Muir`,
        date: `December 24, 2016`,
      },
    ]
  },
];

const mockStore = configureStore([]);

it(`Should Main screen render correctly`, () => {
  const store = mockStore({
    films,
    showedFilmsCount: 8,
    currentFilter: `filter1`,
  });

  const tree = renderer
    .create(
        <Provider store = {store}>
          <Main
            title = 'On The Moon'
            genre = 'comedy'
            dateRelease = '01.01.2020'
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
