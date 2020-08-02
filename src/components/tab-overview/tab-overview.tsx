import {getTextRating} from '@utils/';


interface Props {
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

        <p className="movie-card__starring"><strong>Starring: {film.actors.join(`, `).split()}</strong></p>
      </div>
    </>
  );
};


export default TabOverview;
