import MovieCard from './movie-card';


const mock = {
  title: `title1`,
  image: `image1`,
};

it(`When cursor on the movie card, has movie info`, () => {
  const {film} = mock;
  const movieCard = shallow(<MovieCard
    film = {film}
  />);

  const card = movieCard.find(`.catalog__movies-card`);
  card.simulate(`mouseover`);

  expect();
});
