import MovieCard from '@components/movie-card/movie-card.connect';
import withActiveVideoPlayer from '@hocs/with-active-video-player/with-active-video-player';


const MovieCardWrapped = withActiveVideoPlayer(MovieCard);

export default class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmCard: null
    };

    this._handleMovieCardMouseEnter = this._handleMovieCardMouseEnter.bind(this);
  }

  _handleMovieCardMouseEnter() {
    this.setState({
      activeFilmCard: this
    });
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <MovieCardWrapped
            key = {i}
            film = {film}
            handleMovieCardMouseEnter = {this._handleMovieCardMouseEnter}
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
};
