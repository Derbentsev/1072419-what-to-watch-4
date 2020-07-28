import FiltersByGenre from '@components/filters-by-genre/filters-by-genre.connect';
import MoviesList from '@components/movies-list/movies-list.connect';
import withMoviesList from '@hocs/with-movies-list/with-movies-list';
import FilmPromo from '@components/film-promo/film-promo.connect';


const SHOW_FILM_CARD_BY_BUTTON = 8;
const MoviesListWrapped = withMoviesList(MoviesList);

const Main = (props) => {
  const {
    films,
    setShowedFilmsCount,
    showedFilmsCount,
  } = props;

  const slicedFilms = films.slice(0, showedFilmsCount);

  return (
    <>
      <FilmPromo/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <FiltersByGenre
              setShowedFilmsCount = {setShowedFilmsCount}
            />
          </ul>

          <MoviesListWrapped
            films = {slicedFilms}
          />

          {slicedFilms.length !== films.length &&
            <div className="catalog__more">
              <button onClick={() => {
                setShowedFilmsCount(SHOW_FILM_CARD_BY_BUTTON);
              }}
              className="catalog__button"
              type="button"
              >
                Show more
              </button>
            </div>
          }
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

Main.propTypes = {
  setShowedFilmsCount: PropTypes.func.isRequired,
  showedFilmsCount: PropTypes.number.isRequired,
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
};


export default Main;
