import MovieCard from '@components/movie-card/movie-card.connect';
import withActiveVideoPlayer from '@hocs/with-active-video-player/with-active-video-player';
import {Film} from '@types/film.types';


interface Props {
  handleMovieCardMouseEnter: () => void,
  films: [Film],
}

const MovieCardWrapped = withActiveVideoPlayer(MovieCard);

const MoviesList: React.FunctionComponent<Props> = (props: Props) => {
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
