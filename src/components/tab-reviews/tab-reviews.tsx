import Review from '@components/review/review';
import {Review} from '@types/review.types';


interface Props {
  reviews: [Review],
};

const createReviewColumn: React.FunctionComponent<Props> = (props: Props) => {
  const {reviews} = props;
  
  return (
    <div className="movie-card__reviews-col">
      {reviews.map((review, i) => (
        <Review
          key = {i}
          review = {review}
        />
      ))}
    </div>
  );
};


const TabReviews = (props) => {
  const {reviews} = props;

  const halfReviewsLength = Math.ceil(reviews.length / 2);
  const columnOne = reviews.slice(0, halfReviewsLength);
  const columnTwo = reviews.slice(halfReviewsLength);

  return (
    <div className="movie-card__reviews movie-card__row">
      {createReviewColumn(columnOne)}
      {createReviewColumn(columnTwo)}
    </div>
  );
};


export default TabReviews;
