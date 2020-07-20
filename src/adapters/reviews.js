const createReview = (review) => {
  return (
    {
      filmId: review.id,
      userId: review.user.id,
      author: review.user.name,
      comment: review.comment,
      rating: review.rating,
      date: review.author,
    }
  );
};

const createReviews = (data) => {
  let reviews = [];

  data.forEach((review) => {
    reviews.push(createReview(review));
  });
};


export {createReviews};
