import FiltersByGenre from './filters-by-genre';


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

it(`Render Filters By Genre`, () => {
  const tree = renderer
    .create(<FiltersByGenre
      films = {films}
      onFilterClick = {() => {}}
      currentFilter = 'All'
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
