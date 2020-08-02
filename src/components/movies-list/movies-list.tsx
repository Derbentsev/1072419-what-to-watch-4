import MovieCard from '@components/movie-card/movie-card.connect';
import withActiveVideoPlayer from '@hocs/with-active-video-player/with-active-video-player';


interface Props {
  handleMovieCardMouseEnter: () => {},
  films: [{
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
  }],
}

const MovieCardWrapped = withActiveVideoPlayer(MovieCard);

const MoviesList = (props) => {
  const {films, handleMovieCardMouseEnter} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
        <MovieCardWrapped
          key = {i}
          film = {film}
          handleMovieCardMouseEnter = {handleMovieCardMouseEnter}
        />
      ))}
    </div>
  );
};


export default MoviesList;
