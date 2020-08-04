import VideoPlayer from './video-player';


it(`play and pause video`, () => {
  const mockFunctionMouseEnter = jest.fn();
  const mockFunctionMouseLeave = jest.fn();

  jest.useFakeTimers();

  const videoPlayer = shallow(<VideoPlayer
    handleMouseEnter = {mockFunctionMouseEnter}
    handleMouseLeave = {mockFunctionMouseLeave}
  >
    <video />
  </VideoPlayer>);

  const playerElement = videoPlayer.find(`.small-movie-card__poster`);

  playerElement.props().onMouseEnter();
  expect(mockFunctionMouseEnter).toHaveBeenCalledTimes(1);

  playerElement.props().onMouseLeave();
  expect(mockFunctionMouseLeave).toHaveBeenCalledTimes(1);
});
