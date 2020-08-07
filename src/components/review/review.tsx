import * as moment from 'moment';
import {Review as ReviewType} from '@src/types/review.types';


interface Props {
  review: ReviewType;
}

const Review: React.FunctionComponent<Props> = (props: Props) => {
  const {review} = props;
  const reviewDate = review.date;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.author}</cite>
          <time className="review__date" dateTime={reviewDate}>{moment(new Date(review.date)).format(`MMMM DD, yyyy`)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
};


export default Review;
