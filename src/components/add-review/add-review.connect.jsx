import {connect} from 'react-redux';
import AddReview from './add-review';
import NameSpace from '@reducer/name-space';
import {Operation as ReviewsOperation} from '@reducer/reviews/reviews';


const mapStateToProps = (state) => ({
  activeFilm: state[NameSpace.FILMS].activeFilm,
});

const mapDispatchToProps = (dispatch) => ({
  pushReview(form) {
    dispatch(ReviewsOperation.pushReview(form));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
