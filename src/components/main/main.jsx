import FiltersByGenre from '@components/filters-by-genre/filters-by-genre.connect';
import MoviesList from '@components/movies-list/movies-list.connect';
import withMoviesList from '@hocs/with-movies-list/with-movies-list';
import {SHOW_FILM_CARD_BY_BUTTON} from '@consts/';
import UserLogo from '@components/user-logo/user-logo.connect';


const MoviesListWrapped = withMoviesList(MoviesList);


const Main = (props) => {
  const {
    filmPromo,
    films,
    handleOnPlayClick,
    setShowedFilmsCount,
    showedFilmsCount,
  } = props;

  const slicedFilms = films.slice(0, showedFilmsCount);

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={filmPromo.backgroundImage} alt={filmPromo.title + ` background`} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <UserLogo/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={filmPromo.cover} alt={filmPromo.title + ` poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2
                className="movie-card__title">
                {filmPromo.title}
              </h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{filmPromo.genre}</span>
                <span className="movie-card__year">{filmPromo.dateRelease}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={(evt) => {
                    evt.preventDefault();
                    handleOnPlayClick(filmPromo);
                  }}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use href="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
  handleOnPlayClick: PropTypes.func.isRequired,
  showedFilmsCount: PropTypes.number.isRequired,
  filmPromo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster: PropTypes.string,
    genre: PropTypes.string,
    dateRelease: PropTypes.number,
    cover: PropTypes.string,
    videoSrc: PropTypes.string,
    previewVideoSrc: PropTypes.string,
    director: PropTypes.string,
    actors: PropTypes.arrayOf(PropTypes.string),
    ratingScore: PropTypes.number,
    ratingCount: PropTypes.number,
    description: PropTypes.string,
    runTime: PropTypes.number,
    backgroundImage: PropTypes.string,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      comment: PropTypes.string,
      rating: PropTypes.number,
      author: PropTypes.string,
      date: PropTypes.string,
    })),
  }),
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
