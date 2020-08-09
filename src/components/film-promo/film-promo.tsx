import UserLogo from '@components/user-logo/user-logo.connect';
import {AuthorizationStatus} from '@reducer/user/user';
import history from '@history/history';
import {AppRoute, MyListButtonSettings} from '@src/consts/consts';
import {Film} from '@src/types/film.types';


interface Props {
  authorizationStatus: string;
  setFavoriteFilm: (boolean, number) => void;
  filmPromo: Film;
}

export default class FilmPromo extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);
    this._handleClickAddToMyList = this._handleClickAddToMyList.bind(this);
  }

  _handleClickAddToMyList() {
    const {filmPromo, setFavoriteFilm, authorizationStatus} = this.props;

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(AppRoute.LOGIN);
      return;
    }

    setFavoriteFilm(filmPromo.isFavorite
      ? MyListButtonSettings.NOT_FAVORITE
      : MyListButtonSettings.FAVORITE, filmPromo.id);
  }

  render() {
    const {filmPromo} = this.props;

    return (
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={filmPromo.backgroundImage} alt={filmPromo.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <UserLogo/>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={filmPromo.cover} alt={filmPromo.title + ` poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">
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
                    history.push(`/player/${filmPromo.id}`);
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
                  onClick = {this._handleClickAddToMyList}
                >
                  {filmPromo.isFavorite &&
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use href="#in-list"></use>
                    </svg>
                  }
                  {!filmPromo.isFavorite &&
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use href="#add"></use>
                    </svg>
                  }
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
