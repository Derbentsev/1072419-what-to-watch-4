import moment from 'moment';


const Review = (props) => {
  const {review} = props;

  const reviewDate = new Date(review.date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.author}</cite>
          <time className="review__date" dateTime={reviewDate}>{moment(reviewDate).format(`MMMM DD, yyyy`)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isReqyired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};


export default Review;
