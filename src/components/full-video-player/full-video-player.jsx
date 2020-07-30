import {KeyName} from '@consts/';
import history from '@history/history';


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
      history.goBack();
    }
  }

  render() {
    const {getFilmById} = this.props;
    const filmId = this.props.match.params.id;
    const film = getFilmById(filmId);

    return (
      <div className="player">
        <video
          src={film.videoSrc}
          muted={true}
          className="player__video"
          poster="/img/player-poster.jpg"
          controls={true}
        />

        <button
          type="button"
          className="player__exit"
          onClick={() => history.goBack()}
        >
          Exit
        </button>
      </div>
    );
  }
}

FullVideoPlayer.propTypes = {
  getFilmById: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired,
};
