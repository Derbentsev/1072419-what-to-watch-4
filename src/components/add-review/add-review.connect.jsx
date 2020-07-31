import {connect} from 'react-redux';
import AddReview from './add-review';
import {Operation as ReviewsOperation, ActionCreator as ReviewsActionCreator, PushReviewStatus} from '@reducer/reviews/reviews';
import {getFilmById} from '@reducer/films/selectors';
import NameSpace from '@reducer/name-space';


const mapStateToProps = (state) => ({
  getFilmById: (filmId) => getFilmById(state, filmId),
  pushReviewStatus: state[NameSpace.REVIEWS].pushReviewStatus,
});

const mapDispatchToProps = (dispatch) => ({
  pushReview(rating, comment, filmId) {
    dispatch(ReviewsOperation.pushReview(rating, comment, filmId));
  },
  setFalseReviewPushStatus() {
    dispatch(ReviewsActionCreator.setReviewPushStatus(PushReviewStatus.UNSUCCESS));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
