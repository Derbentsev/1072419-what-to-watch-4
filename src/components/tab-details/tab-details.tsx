import {getRunTimeFromMinutes} from '@utils/utils';
import {Film} from '@src/types/film.types';


interface Props {
  film: Film,
}

const TabDetails: React.FunctionComponent<Props> = (props: Props) => {
  const {film} = props;
  const runTime = getRunTimeFromMinutes(film.runTime);

  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{film.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {film.actors.join(`, `).split(``)}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{runTime}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{film.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{film.dateRelease}</span>
          </p>
        </div>
      </div>
    </>
  );
};


export default TabDetails;
