import {DELAY_ON_MOUSE_ENTER} from '@consts/index';


const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this._videoRef = React.createRef();

      this._timeout = null;

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
      const {film} = this.props;

      return (
        <Component
          handleMouseEnter = {this._handleMouseEnter}
          handleMouseLeave = {this._handleMouseLeave}
        >
          <video width="280" height="175" poster={`img/${film.poster}`} muted={true} ref={this._videoRef}>
            <source src={film.src} type="video/webm"></source>
            <source src={film.src} type="video/mp4"></source>
          </video>
        </Component>
      );
    }
  }

  WithVideoPlayer.propTypes = {
    film: PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
  };

  return WithVideoPlayer;
};


export default withVideoPlayer;
