import MovieCard from '@components/movie-card/movie-card.connect';
import withActiveVideoPlayer from '@hocs/with-active-video-player/with-active-video-player';


const MovieCardWrapped = withActiveVideoPlayer(MovieCard);

export default class MoviesList extends React.PureComponent {
  render() {
    const {films, _handleMovieCardMouseEnter} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <MovieCardWrapped
            key = {i}
            film = {film}
            handleMovieCardMouseEnter = {_handleMovieCardMouseEnter}
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
  _handleMovieCardMouseEnter: PropTypes.func.isRequired,
};
