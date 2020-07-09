const MovieCard = (props) => {
  const {
    film,
    handleMovieCardMouseEnter,
    handleMovieCardClick,
    renderPlayer
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMovieCardMouseEnter}
      onClick={(evt) => {
        evt.preventDefault();
        handleMovieCardClick(film);
      }}
    >

      {renderPlayer(film.src, film.poster)}

      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link" href="movie-page.html">{film.title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  handleMovieCardMouseEnter: PropTypes.func.isRequired,
  handleMovieCardClick: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};


export default MovieCard;
