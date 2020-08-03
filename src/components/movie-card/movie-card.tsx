import history from '@history/history';
import {film} from '@types/';


interface Props {
  handleMovieCardMouseEnter: () => {},
  renderPlayer: (string, string) => {},
  currentFilter: string,
  film: film,
}

const MovieCard: React.FunctionComponent<Props> = (props: Props) => {
  const {
    film,
    handleMovieCardMouseEnter,
    renderPlayer,
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMovieCardMouseEnter}
      onClick={() => history.push(`/films/${film.id}`)}
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


export default MovieCard;
