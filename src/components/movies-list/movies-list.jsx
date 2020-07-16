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
  })).isRequired,
  handleMovieCardMouseEnter: PropTypes.func.isRequired,
};


export default MoviesList;
