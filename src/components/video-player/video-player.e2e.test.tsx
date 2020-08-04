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

  playerElement.simulate(`mouseenter`);
  expect(mockFunctionMouseEnter).toHaveBeenCalledTimes(1);

  playerElement.simulate(`mouseleave`);
  expect(mockFunctionMouseLeave).toHaveBeenCalledTimes(1);
});
