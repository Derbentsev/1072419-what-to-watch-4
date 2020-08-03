import MovieCard from '@components/movie-card/movie-card.connect';
import withActiveVideoPlayer from '@hocs/with-active-video-player/with-active-video-player';
import {film} from '@types/';


interface Props {
  handleMovieCardMouseEnter: () => {},
  films: [film],
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
