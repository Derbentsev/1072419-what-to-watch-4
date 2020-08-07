import FiltersByGenre from '@components/filters-by-genre/filters-by-genre.connect';
import MoviesList from '@components/movies-list/movies-list.connect';
import withMoviesList from '@hocs/with-movies-list/with-movies-list';
import FilmPromo from '@components/film-promo/film-promo.connect';
import {Film} from '@src/types/film.types';


interface Props {
  setShowedFilmsCount: (number?) => void;
  showedFilmsCount: number;
  currentFilter: string;
  films: Film[];
}

const SHOW_FILM_CARD_BY_BUTTON = 8;
const MoviesListWrapped = withMoviesList(MoviesList);

const Main: React.FunctionComponent<Props> = (props: Props) => {
  const {
    films,
    setShowedFilmsCount,
    showedFilmsCount,
  } = props;

  if (!films) {
    return <h2>Loading...</h2>;
  }

  const slicedFilms = films.slice(0, showedFilmsCount);

  return (
    <>
      <FilmPromo/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <FiltersByGenre setShowedFilmsCount = {setShowedFilmsCount}/>
          </ul>

          <MoviesListWrapped films = {slicedFilms}/>

          {slicedFilms.length !== films.length &&
            <div className="catalog__more">
              <button
                onClick={() => {
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


export default Main;
