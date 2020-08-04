import MovieCard from './movie-card';


const mock = {
  id: 1,
  title: `title1`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `genre1`,
  dateRelease: 2011,
  cover: `the-grand-budapest-hotel-poster.jpg`,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  director: `director1`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  ratingScore: 1,
  ratingCount: 24,
  description: `description1`,
  runTime: 103,
  reviews: [
    {
      comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      rating: 8.3,
      author: `Kate Muir`,
      date: `December 24, 2016`,
    },
  ]
};

it(`Render Movie Card`, () => {
  const onMovieCardMouseEnterSpy = jest.fn();

  const tree = renderer
    .create(<MovieCard
      film = {mock}
      handleMovieCardMouseEnter = {onMovieCardMouseEnterSpy}
      handleMovieCardClick = {() => {}}
      renderPlayer = {() => {}}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});