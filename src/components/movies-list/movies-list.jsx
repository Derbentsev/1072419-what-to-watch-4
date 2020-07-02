import MovieCard from '@components/movie-card/movie-card';
import withVideoPlayer from '@hocs/with-video-player/with-video-player';


const MovieCardWrapped = withVideoPlayer(MovieCard);

export default class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmCard: null
    };

    this._onMovieCardMouseEnter = this._onMovieCardMouseEnter.bind(this);
  }

  _onMovieCardMouseEnter() {
    this.setState({
      activeFilmCard: this
    });
  }

  render() {
    const {films, onMovieCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <MovieCardWrapped
            key = {i}
            film = {film}
            onMovieCardMouseEnter = {this._onMovieCardMouseEnter}
            onMovieCardClick = {onMovieCardClick}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};
