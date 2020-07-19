import Review from '@components/review/review';


const TabReviews = (props) => {
  const {reviews} = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review, i) => (
          <Review
            key = {i}
            review = {review}
          />
        ))}
      </div>
      <div className="movie-card__reviews-col">

      </div>
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
