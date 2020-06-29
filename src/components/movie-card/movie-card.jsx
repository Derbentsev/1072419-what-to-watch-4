import VideoPlayer from '@components/video-player/video-player';


export const MovieCard = (props) => {
  const {film, onMovieCardMouseEnter, onMovieCardClick} = props;

  return (
    <article
      onMouseEnter={onMovieCardMouseEnter}
      className="small-movie-card catalog__movies-card"
      onClick={(evt) => {
        evt.preventDefault();
        onMovieCardClick(film);
      }}
    >
      <VideoPlayer
        src = {film.src}
        poster = {film.poster}
      />
      <h3 className="small-movie-card__title">
        <a
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
  onMovieCardMouseEnter: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};
