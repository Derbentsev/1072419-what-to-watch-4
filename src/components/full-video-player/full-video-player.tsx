import {KeyName} from '@consts';
import history from '@history/history';
import {Film} from '@src/types/film.types';


interface Props {
  getFilmById: (number) => Film;
  match: {
    params: {
      id: string;
    };
  };
}

export default class FullVideoPlayer extends React.PureComponent<Props, {}> {
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
    const film: Film = getFilmById(filmId);

    if (!film) {
      return <h2>Loading...</h2>;
    }

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
