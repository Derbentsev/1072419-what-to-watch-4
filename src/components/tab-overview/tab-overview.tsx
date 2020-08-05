import {getTextRating} from '@utils/utils';
import {Film} from '@src/types/film.types';


interface Props {
  film: Film,
}

const TabOverview: React.FunctionComponent<Props> = (props: Props) => {
  const {film} = props;
  const textRating = getTextRating(film.ratingScore);

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{textRating}</span>
          <span className="movie-rating__count">{film.ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {film.description}
        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {film.actors.join(`, `).split(``)}</strong></p>
      </div>
    </>
  );
};


export default TabOverview;
