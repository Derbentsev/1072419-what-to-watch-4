const TabOverview = (props) => {
  const {film} = props;

  return (
    <>
    <div className="movie-rating">
      <div className="movie-rating__score">{film.ratingScore}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{film.ratingLevel}</span>
        <span className="movie-rating__count">{film.ratingCount}</span>
      </p>
    </div>

    <div className="movie-card__text">
      {film.description}
      <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {film.actors.join(`, `).split()}</strong></p>
    </div>
    </>
  );
};

TabOverview.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    dateRelease: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    ratingScore: PropTypes.string.isRequired,
    ratingLevel: PropTypes.string.isRequired,
    ratingCount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    runTime: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      comment: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })),
  }).isRequired,
};


export default TabOverview;