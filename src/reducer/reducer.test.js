import reducer from './reducer';
import {ActionType, ActionCreator} from './reducer';


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
      {
        comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        rating: `8.0`,
        author: `Bill Goodykoontz`,
        date: `November 18, 2015`,
      },
      {
        comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        rating: `8.0`,
        author: `Amanda Greever`,
        date: `November 18, 2015`,
      },
      {
        comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        rating: `7.2`,
        author: `Matthew Lickona`,
        date: `December 20, 2016`,
      },
    ],
  },
  {
    title: `title2`,
    poster: `bohemian-rhapsody.jpg`,
    genre: `genre1`,
    dateRelease: `2012`,
    cover: `the-grand-budapest-hotel-poster.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
      {
        comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        rating: `8.0`,
        author: `Bill Goodykoontz`,
        date: `November 18, 2015`,
      },
      {
        comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        rating: `8.0`,
        author: `Amanda Greever`,
        date: `November 18, 2015`,
      },
      {
        comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        rating: `7.2`,
        author: `Matthew Lickona`,
        date: `December 20, 2016`,
      },
    ],
  },
  {
    title: `title3`,
    poster: `macbeth.jpg`,
    genre: `genre1`,
    dateRelease: `2013`,
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
      {
        comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        rating: `8.0`,
        author: `Bill Goodykoontz`,
        date: `November 18, 2015`,
      },
      {
        comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        rating: `8.0`,
        author: `Amanda Greever`,
        date: `November 18, 2015`,
      },
      {
        comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        rating: `7.2`,
        author: `Matthew Lickona`,
        date: `December 20, 2016`,
      },
    ],
  },
  {
    title: `title4`,
    poster: `aviator.jpg`,
    genre: `genre4`,
    dateRelease: `2014`,
    cover: `the-grand-budapest-hotel-poster.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
      {
        comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        rating: `8.0`,
        author: `Bill Goodykoontz`,
        date: `November 18, 2015`,
      },
      {
        comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        rating: `8.0`,
        author: `Amanda Greever`,
        date: `November 18, 2015`,
      },
      {
        comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        rating: `7.2`,
        author: `Matthew Lickona`,
        date: `December 20, 2016`,
      },
    ],
  },
  {
    title: `title5`,
    poster: `we-need-to-talk-about-kevin.jpg`,
    genre: `genre5`,
    dateRelease: `2015`,
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
      {
        comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        rating: `8.0`,
        author: `Bill Goodykoontz`,
        date: `November 18, 2015`,
      },
      {
        comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        rating: `8.0`,
        author: `Amanda Greever`,
        date: `November 18, 2015`,
      },
      {
        comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        rating: `7.2`,
        author: `Matthew Lickona`,
        date: `December 20, 2016`,
      },
    ],
  },
  {
    title: `title6`,
    poster: `what-we-do-in-the-shadows.jpg`,
    genre: `genre6`,
    dateRelease: `2016`,
    cover: `the-grand-budapest-hotel-poster.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
      {
        comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        rating: `8.0`,
        author: `Bill Goodykoontz`,
        date: `November 18, 2015`,
      },
      {
        comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        rating: `8.0`,
        author: `Amanda Greever`,
        date: `November 18, 2015`,
      },
      {
        comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        rating: `7.2`,
        author: `Matthew Lickona`,
        date: `December 20, 2016`,
      },
    ],
  },
  {
    title: `title7`,
    poster: `revenant.jpg`,
    genre: `genre7`,
    dateRelease: `2017`,
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
      {
        comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        rating: `8.0`,
        author: `Bill Goodykoontz`,
        date: `November 18, 2015`,
      },
      {
        comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        rating: `8.0`,
        author: `Amanda Greever`,
        date: `November 18, 2015`,
      },
      {
        comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        rating: `7.2`,
        author: `Matthew Lickona`,
        date: `December 20, 2016`,
      },
    ],
  },
  {
    title: `title8`,
    poster: `johnny-english.jpg`,
    genre: `genre8`,
    dateRelease: `2018`,
    cover: `the-grand-budapest-hotel-poster.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
      {
        comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        rating: `8.0`,
        author: `Bill Goodykoontz`,
        date: `November 18, 2015`,
      },
      {
        comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        rating: `8.0`,
        author: `Amanda Greever`,
        date: `November 18, 2015`,
      },
      {
        comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        rating: `7.2`,
        author: `Matthew Lickona`,
        date: `December 20, 2016`,
      },
    ],
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
      {
        comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        rating: `8.0`,
        author: `Bill Goodykoontz`,
        date: `November 18, 2015`,
      },
      {
        comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        rating: `8.0`,
        author: `Amanda Greever`,
        date: `November 18, 2015`,
      },
      {
        comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        rating: `7.2`,
        author: `Matthew Lickona`,
        date: `December 20, 2016`,
      },
    ],
  },
  {
    title: `title2`,
    poster: `bohemian-rhapsody.jpg`,
    genre: `genre1`,
    dateRelease: `2012`,
    cover: `the-grand-budapest-hotel-poster.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
      {
        comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        rating: `8.0`,
        author: `Bill Goodykoontz`,
        date: `November 18, 2015`,
      },
      {
        comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        rating: `8.0`,
        author: `Amanda Greever`,
        date: `November 18, 2015`,
      },
      {
        comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        rating: `7.2`,
        author: `Matthew Lickona`,
        date: `December 20, 2016`,
      },
    ],
  },
];


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    activeFilm: null,
    films,
    showedFilmsCount: 8,
    currentFilter: `All genres`,
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

it(`Reducer should change showed films count`, () => {
  expect(reducer({
    showedFilmsCount: 8,
  }, {
    type: ActionType.SET_SHOWED_FILMS_COUNT,
    payload: 3,
  })).toEqual({
    showedFilmsCount: 11,
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

  it(`Action creator for set active films returns correct action`, () => {
    expect(ActionCreator
      .setActiveFilm(films[0]))
      .toEqual({
        type: ActionType.SET_ACTIVE_FILM,
        payload: films[0],
      });
  });
});
