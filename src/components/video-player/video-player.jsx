import {DELAY_ON_MOUSE_ENTER} from '@consts/index';


export default class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this._timeout = null;

    this.state = {
      isPlaying: false,
    };

    this._ff = this._ff.bind(this);
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.autoplay = false;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.state.isPlaying) {
      video.play();
      return;
    }

    video.load();
  }

  _ff() {
    this.setState({isPlaying: !this.state.isPlaying});
  }

  render() {
    const {src, poster} = this.props;

    return (
      <>
        <div
          className="small-movie-card__poster"
          onMouseEnter={() => {
            this._timeout = setTimeout(this._ff, DELAY_ON_MOUSE_ENTER);
          }}
          onMouseLeave={() => {
            if (this.state.isPlaying || this._timeout) {
              clearTimeout(this._timeout);
              this._timeout = null;
              this.setState({isPlaying: false});
            }
          }}
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
