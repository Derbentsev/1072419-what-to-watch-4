import VideoPlayer from './video-player';


const mocks = {
  src: `src1`,
  poster: `poster1`
};
const mockTimeout = 5000;

it(`play and pause video`, () => {
  jest.useFakeTimers();

  const videoPlayer = shallow(<VideoPlayer
    src = {mocks.src}
    poster = {mocks.poster}
  />);

  const v = videoPlayer.find(`.small-movie-card__poster`);
  v.props().onMouseEnter();

  expect(videoPlayer.state(`isPlaying`)).toEqual(false);
  expect(setTimeout).toHaveBeenCalledTimes(1);

  setTimeout(() => {
    videoPlayer.state(`isPlaying`).toEqual(true);
  }, mockTimeout);
});
