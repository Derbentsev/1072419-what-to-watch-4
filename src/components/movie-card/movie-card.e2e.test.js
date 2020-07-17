import MovieCard from './movie-card';


const mocks = {
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

it(`When cursor on the movie card, has movie info`, () => {
  const handleMovieCardMouseEnterSpy = jest.fn();

  const movieCard = shallow(<MovieCard
    film = {mocks}
    handleMovieCardMouseEnter = {handleMovieCardMouseEnterSpy}
    handleMovieCardClick = {() => {}}
    renderPlayer = {() => {}}
  />);

  const card = movieCard.find(`.small-movie-card`);
  card.props().onMouseEnter();

  expect(handleMovieCardMouseEnterSpy.mock.calls.length).toBe(1);
});

it(`When mouse click on movie card`, () => {
  const handleMovieCardClickSpy = jest.fn();

  const movieCard = shallow(<MovieCard
    film = {mocks}
    handleMovieCardMouseEnter = {() => {}}
    handleMovieCardClick = {handleMovieCardClickSpy}
    renderPlayer = {() => {}}
  />);

  const movieCardElement = movieCard.find(`.small-movie-card`);
  movieCardElement.props().onClick({preventDefault() {}});

  expect(handleMovieCardClickSpy.mock.calls.length).toBe(1);
});
