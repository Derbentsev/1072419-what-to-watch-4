const DELAY_ON_MOUSE_ENTER = 2000;

interface Props {
  film: {
    id: number,
    title: string,
    poster: string,
    genre: string,
    dateRelease: number,
    cover: string,
    videoSrc: string,
    previewVideoSrc: string,
    director: string,
    actors: [string],
    ratingScore: number,
    ratingCount: number,
    description: string,
    runTime: number,
    reviews: [{
      comment: string,
      rating: number,
      author: string,
      date: string,
    }],
  },
}

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

  return WithVideoPlayer;
};


export default withVideoPlayer;
