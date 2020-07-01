import {DELAY_ON_MOUSE_ENTER} from '@consts/index';


export default class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this._timeout = null;

    this.state = {
      isPlaying: false,
    };

    this._togglePlayingState = this._togglePlayingState.bind(this);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this._timeout);
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.state.isPlaying) {
      video.play();
      return;
    }

    video.load();
  }

  _togglePlayingState() {
    this.setState({isPlaying: !this.state.isPlaying});
  }

  _handleMouseEnter() {
    this._timeout = setTimeout(this._togglePlayingState, DELAY_ON_MOUSE_ENTER);
  }

  _handleMouseLeave() {
    if (this.state.isPlaying || this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = null;
      this.setState({isPlaying: false});
    }
  }

  render() {
    const {src, poster} = this.props;

    return (
      <>
        <div
          className="small-movie-card__poster"
          onMouseEnter={this._handleMouseEnter}
          onMouseLeave={this._handleMouseLeave}
        >
          <video width="280" height="175" poster={`img/${poster}`} muted={true} ref={this._videoRef}>
            <source src={src} type="video/webm"></source>
            <source src={src} type="video/mp4"></source>
          </video>
        </div>
      </>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
