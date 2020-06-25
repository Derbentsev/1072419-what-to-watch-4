import VideoPlayer from '@components/video-player/video-player';


export const MovieCard = (props) => {
  const {film, onMovieCardMouseOver, onMovieCardClick} = props;

  return (
    <article
      onMouseOver={onMovieCardMouseOver}
      className="small-movie-card catalog__movies-card"
    >
      <div
        onClick={() => {
          onMovieCardClick(film);
        }}
        className="small-movie-card__poster"
      >
        <VideoPlayer
          isPlaying = {true}
          src = {film.src}
          poster = {film.poster}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          onClick={(evt) => {
            evt.preventDefault();
            onMovieCardClick(film);
          }}
          className="small-movie-card__link" href="movie-page.html">{film.title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  onMovieCardMouseOver: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};
