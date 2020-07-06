import {reducer, ActionType, ActionCreator} from './reducer';


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

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    currentFilter: `All genres`,
    filteredFilms: null,
  });
});

it(`Reducer should change current filter`, () => {
  expect(reducer({
    currentFilter: `All genres`,
    filteredFilms: null,
  }, {
    type: ActionType.CHANGE_FILTER,
    payload: `Genre1`,
  })).toEqual({
    currentFilter: `Genre1`,
    filteredFilms: null,
  });
});

it(`Reducer should change filtered films`, () => {
  expect(reducer({
    currentFilter: `All genres`,
    filteredFilms: null,
  }, {
    type: ActionType.SET_FILTERED_FILMS,
    payload: films,
  })).toEqual({
    currentFilter: `All genres`,
    filteredFilms: films,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change filter returns correct action`, () => {
    expect(ActionCreator
      .changeFilter(`Genre1`))
      .toEqual({
        type: ActionType.CHANGE_FILTER,
        payload: `Genre1`,
      });
  });

  it(`Action creator for set filtered films returns correct action`, () => {
    expect(ActionCreator
      .setFilteredFilms(films))
      .toEqual({
        type: ActionType.SET_FILTERED_FILMS,
        payload: films,
      });
  });
});
