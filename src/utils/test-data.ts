const films = [
  {
    id: 1,
    title: `title1`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `genre1`,
    dateRelease: 2011,
    isFavorite: true,
    cover: `the-grand-budapest-hotel-poster.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    backgroundImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `green`,
    director: `director1`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    ratingScore: 1,
    ratingCount: 240,
    description: `description1`,
    runTime: 99,
  },
  {
    id: 2,
    title: `title1`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `genre1`,
    dateRelease: 2011,
    isFavorite: true,
    cover: `the-grand-budapest-hotel-poster.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    backgroundImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `green`,
    director: `director1`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    ratingScore: 1,
    ratingCount: 240,
    description: `description1`,
    runTime: 99,
  },
  {
    id: 3,
    title: `title1`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `genre1`,
    dateRelease: 2011,
    isFavorite: false,
    cover: `the-grand-budapest-hotel-poster.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    backgroundImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `green`,
    director: `director1`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    ratingScore: 1,
    ratingCount: 240,
    description: `description1`,
    runTime: 99,
  },
];

const rawFilms = [
  {
    id: 1,
    name: `title1`,
    background_image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `genre1`,
    released: 2011,
    is_favorite: true,
    poster_image: `the-grand-budapest-hotel-poster.jpg`,
    video_link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    preview_video_link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    background_color: `green`,
    director: `director1`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    rating: 1,
    scores_count: 240,
    description: `description1`,
    run_time: 99,
  },
  {
    id: 2,
    name: `title1`,
    background_image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `genre1`,
    released: 2011,
    is_favorite: true,
    poster_image: `the-grand-budapest-hotel-poster.jpg`,
    video_link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    preview_video_link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    background_color: `green`,
    director: `director1`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    rating: 1,
    scores_count: 240,
    description: `description1`,
    run_time: 99,
  },
  {
    id: 3,
    name: `title1`,
    background_image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `genre1`,
    released: 2011,
    is_favorite: false,
    poster_image: `the-grand-budapest-hotel-poster.jpg`,
    video_link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    preview_video_link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    background_color: `green`,
    director: `director1`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    rating: 1,
    scores_count: 240,
    description: `description1`,
    run_time: 99,
  }
];

const reviews = [
  {
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    rating: 8.9,
    author: `Kate Muir`,
    date: `December 24, 2016`,
  },
  {
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    rating: 8.9,
    author: `Kate Muir`,
    date: `December 24, 2016`,
  },
]

const filmPromo = {
  id: 10,
  title: `title1`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `genre1`,
  dateRelease: 2011,
  isFavorite: false,
  cover: `the-grand-budapest-hotel-poster.jpg`,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  backgroundImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  backgroundColor: `green`,
  director: `director1`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  ratingScore: 1,
  ratingCount: 240,
  description: `description1`,
  runTime: 99,
};

const mockFilmsStore = {
  films,
  filmPromo,
  favoriteFilms: films,
};

const mockFilterStore = {
  currentFilter: `All genres`,
};

const mockUserStore = {
  authorizationStatus: `NO_AUTH`,
  authorizationError: ``,
};

const mockReviewsStore = {
  reviews,
  pushReviewStatus: ``,
};


export {
  mockFilmsStore,
  mockFilterStore,
  mockUserStore,
  mockReviewsStore,
  films,
  reviews,
  rawFilms,
};
