import MovieCard from '@components/movie-card/movie-card.connect';
import withActiveVideoPlayer from '@hocs/with-active-video-player/with-active-video-player';


const MovieCardWrapped = withActiveVideoPlayer(MovieCard);

const MoviesList = (props) => {
  const {films, handleMovieCardMouseEnter} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
        <MovieCardWrapped
          key = {i}
          film = {film}
          handleMovieCardMouseEnter = {handleMovieCardMouseEnter}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
  handleMovieCardMouseEnter: PropTypes.func.isRequired,
};


export default MoviesList;
