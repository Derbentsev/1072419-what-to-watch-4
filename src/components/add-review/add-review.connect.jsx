import AddReview from './add-review';
import {connect} from 'react-redux';
import {Operation as ReviewsOperation} from '@reducer/reviews/reviews';


const mapDispatchToProps = (dispatch) => ({
  pushReview(review) {
    dispatch(ReviewsOperation.pushReview(review));
  },
});


export default connect(null, mapDispatchToProps)(AddReview);
