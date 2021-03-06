import VideoPlayer from './video-player';


it(`Render Video Player`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          handleMouseEnter = {() => null}
          handleMouseLeave = {() => null}
        >
          <video />
        </VideoPlayer>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
