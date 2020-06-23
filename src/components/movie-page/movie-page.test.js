import {MoviePage} from './movie-page';


const mocks = {
  title: `title1`,
  poster: `image1`,
  genre: `genre1`,
  dateRelease: `2011`,
  cover: `the-grand-budapest-hotel-poster.jpg`,
};

it(`Render Movie Page`, () => {
  const tree = renderer
    .create(<MoviePage
      film = {mocks}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
