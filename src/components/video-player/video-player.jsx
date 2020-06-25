export default class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  render() {
    const {src, poster} = this.props;
    const {isPlaying} = this.state;

    return (
      <>
        <video width="280" height="175" poster={`img/${poster}`} muted="true" autoPlay={isPlaying}>
          <source src={src} type="video/webm"></source>
          <source src={src} type="video/mp4"></source>
        </video>
      </>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
