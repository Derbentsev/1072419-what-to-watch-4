import VideoPlayer from './video-player';


const mocks = {
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
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
