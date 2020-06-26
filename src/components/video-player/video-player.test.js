import VideoPlayer from './video-player';


const mocks = {
  src: `src1`,
  poster: `poster1`
};

it(`Render Video Player`, () => {
  const tree = renderer
    .create(<VideoPlayer
      src = {mocks.src}
      poster = {mocks.poster}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
