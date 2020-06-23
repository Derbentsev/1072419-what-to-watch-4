export const MovieCard = (props) => {
  const {film, onMovieCardMouseOver} = props;

  return (
    <article
      onMouseOver={onMovieCardMouseOver}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__poster">
        <img src={`img/${film.poster}`} alt={film.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
  onMovieCardMouseOver: PropTypes.func.isRequired
};
