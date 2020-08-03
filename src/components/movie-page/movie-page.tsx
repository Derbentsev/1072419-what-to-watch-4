import Tabs from '@components/tabs/tabs';
import withActiveTab from '@hocs/with-active-tab/with-active-tab';
import MoviesList from '@components/movies-list/movies-list';
import withMoviesList from '@hocs/with-movies-list/with-movies-list';
import UserLogo from '@components/user-logo/user-logo.connect';
import {AppRoute, MyListButtonSettings} from '@consts/';
import history from '@history/history';
import {AuthorizationStatus} from '@reducer/user/user';
import {Film} from '@types/film.types';
import {Review} from '@types/review.types';


interface Props {
  authorizationStatus: string,
  getFilmById: (number) => Film,
  loadReviews: (number) => void,
  setFavoriteFilm: (boolean, number) => void,
  match: {
    params: {
      id: string,
    }
  },
  currentFilter: string,
  films: [Film],
}

const SAME_FILMS_COUNT = 4;

const sameGenreFilms = (currentFilm, films) => {
  const index = films.indexOf(currentFilm);

  films.splice(index, 1);

  return films
    .filter((film) => film.genre === currentFilm.genre)
    .splice(0, SAME_FILMS_COUNT);
};

const MoviesListWrapped = withMoviesList(MoviesList);
const TabsWrapped = withActiveTab(Tabs);


export default class MoviePage extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
    this._handleClickAddToMyList = this._handleClickAddToMyList.bind(this);
  }

  _handleClickAddToMyList(filmId, currentFilm) {
    const {setFavoriteFilm, authorizationStatus} = this.props;

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(AppRoute.LOGIN);
      return;
    }

    setFavoriteFilm(currentFilm.isFavorite
      ? MyListButtonSettings.NOT_FAVORITE
      : MyListButtonSettings.FAVORITE, filmId);
  }

  componentDidMount() {
    const {loadReviews} = this.props;
    const filmId = this.props.match.params.id;
    loadReviews(filmId);
  }

  render() {
    const {
      films,
      authorizationStatus,
      getFilmById,
    } = this.props;

    const filmId = this.props.match.params.id;
    const currentFilm: film = getFilmById(filmId) || null;
    const sameFilms = sameGenreFilms(currentFilm, films.slice()) || null;

    if (!currentFilm) {
      return <h2>Loading...</h2>;
    }

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={currentFilm.backgroundImage} alt={currentFilm.title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <Link className="logo__link" to={AppRoute.ROOT}>
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <UserLogo/>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{currentFilm.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{currentFilm.genre}</span>
                  <span className="movie-card__year">{currentFilm.dateRelease}</span>
                </p>

                <div className="movie-card__buttons">
                  <button
                    className="btn btn--play movie-card__button"
                    type="button"
                    onClick={(evt) => {
                      evt.preventDefault();
                      history.push(`/player/${filmId}`);
                    }}
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use href="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>

                  <button
                    className="btn btn--list movie-card__button"
                    type="button"
                    onClick={() => this._handleClickAddToMyList(filmId, currentFilm)}
                  >
                    {currentFilm.isFavorite &&
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        <use href="#in-list"></use>
                      </svg>
                    }
                    {!currentFilm.isFavorite &&
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use href="#add"></use>
                      </svg>
                    }
                    <span>My list</span>
                  </button>

                  {authorizationStatus &&
                    <a
                      href="add-review.html"
                      className="btn movie-card__button"
                      onClick={(evt) => {
                        evt.preventDefault();
                        history.push(`/films/${filmId}/review`);
                      }}
                    >Add review
                    </a>
                  }

                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={currentFilm.cover} alt="" width="218" height="327" />
              </div>

              <TabsWrapped
                film = {currentFilm}
              />
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            {sameFilms
              ?
              <MoviesListWrapped
                films = {sameFilms}
              />
              :
              <h2>Loading...</h2>
            }
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
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
  }
}
