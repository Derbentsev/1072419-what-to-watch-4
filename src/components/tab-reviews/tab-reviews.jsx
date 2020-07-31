import Review from '@components/review/review';


const createReviewColumn = (reviews) => {
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

TabReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isReqyired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
};


export default TabReviews;
