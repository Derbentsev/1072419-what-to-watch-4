const DELAY_ON_MOUSE_ENTER = 2000;

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
          <video src={film.previewVideoSrc} width="280" height="175" poster={film.poster} muted={true} ref={this._videoRef} />
        </Component>
      );
    }
  }

  WithVideoPlayer.propTypes = {
    film: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      dateRelease: PropTypes.number.isRequired,
      cover: PropTypes.string.isRequired,
      videoSrc: PropTypes.string.isRequired,
      previewVideoSrc: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      ratingScore: PropTypes.number.isRequired,
      ratingCount: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      runTime: PropTypes.number.isRequired,
      reviews: PropTypes.arrayOf(PropTypes.shape({
        comment: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })),
    }).isRequired,
  };

  return WithVideoPlayer;
};


export default withVideoPlayer;
