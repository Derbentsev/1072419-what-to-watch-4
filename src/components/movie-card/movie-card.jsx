import history from '@history/history';


const MovieCard = (props) => {
  const {
    film,
    handleMovieCardMouseEnter,
    handleMovieCardClick,
    renderPlayer,
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMovieCardMouseEnter}
      onClick={(evt) => {
        evt.preventDefault();
        // handleMovieCardClick(film);
        history.push(`/films/${film.id}`);
      }}
    >

      {renderPlayer(film.previewVideoSrc, film.poster)}

      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {film.title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
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
  handleMovieCardMouseEnter: PropTypes.func.isRequired,
  handleMovieCardClick: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};


export default MovieCard;
