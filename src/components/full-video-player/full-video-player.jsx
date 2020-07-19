import {KeyName} from '@consts/';


export default class FullVideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleEscClick = this._handleEscClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener(`keydown`, this._handleEscClick);
  }

  componentWillUnmount() {
    document.removeEventListener(`keydown`, this._handleEscClick);
  }

  _handleEscClick(evt) {
    if (evt.key === KeyName.ESC) {
      this.props.handleOnExitClick();
    }
  }

  render() {
    const {
      handleOnExitClick,
      activeFullVideoPlayer,
    } = this.props;

    return (
      <div className="player">
        <video
          src={activeFullVideoPlayer.videoSrc}
          muted={true}
          className="player__video"
          poster="img/player-poster.jpg"
          controls={true}
        />

        <button
          type="button"
          className="player__exit"
          onClick={handleOnExitClick}
        >
          Exit
        </button>
      </div>
    );
  }
}

FullVideoPlayer.propTypes = {
  activeFullVideoPlayer: PropTypes.shape({
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
  handleOnExitClick: PropTypes.func.isRequired,
};
