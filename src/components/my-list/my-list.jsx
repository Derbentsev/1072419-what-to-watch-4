import {AppRoute} from '@consts/';
import UserLogo from '@components/user-logo/user-logo.connect';
import MoviesList from '@components/movies-list/movies-list.connect';
import withMoviesList from '@hocs/with-movies-list/with-movies-list';


const MoviesListWrapped = withMoviesList(MoviesList);

class MyList extends React.PureComponent {
  componentWillMount() {
    const {loadFavoriteFilms} = this.props;

    loadFavoriteFilms();
  }

  render() {
    const {favoriteFilms} = this.props;

    return (
      <>
        <div className="user-page">
          <header className="page-header user-page__head">
            <div className="logo">
              <Link to = {AppRoute.ROOT} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <h1 className="page-title user-page__title">My list</h1>

            <UserLogo/>
          </header>

          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <MoviesListWrapped films={favoriteFilms}/>

            {favoriteFilms.length === 0 && <p>СЕЙЧАС ТУТ ПУСТО... ДОБАВЬТЕ ХОТЯ БЫ ОДИН ФИЛЬМ В ИЗБРАННОЕ</p>}
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


export default MyList;
