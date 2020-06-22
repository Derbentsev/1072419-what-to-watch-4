import {MovieCard} from './movie-card';


const mock = {
  title: `title1`,
  image: `image1`,
};

it(`Render Movie Card`, () => {
  const onMovieCardMouseOverSpy = jest.fn();

  const tree = renderer
    .create(<MovieCard
      film = {mock}
      onMovieCardMouseOver = {onMovieCardMouseOverSpy}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
