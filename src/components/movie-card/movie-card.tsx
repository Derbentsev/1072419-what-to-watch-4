import history from '@history/history';


interface Props {
  handleMovieCardMouseEnter: () => {},
  renderPlayer: () => {},
  currentFilter: string,
  film: {
    id: number,
    title: string,
    poster: string,
    genre: string,
    dateRelease: number,
    cover: string,
    videoSrc: string,
    previewVideoSrc: string,
    director: string,
    actors: [string],
    ratingScore: number,
    ratingCount: number,
    description: string,
    runTime: number,
    reviews: {
      comment: string,
      rating: number,
      author: string,
      date: string,
    },
  },
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
