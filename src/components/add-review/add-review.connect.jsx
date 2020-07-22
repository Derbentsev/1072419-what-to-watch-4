import {connect} from 'react-redux';
import AddReview from './add-review';
import NameSpace from '@reducer/name-space';
import {Operation as ReviewsOperation} from '@reducer/reviews/reviews';
import {ActionCreator as PageActionCreator} from '@reducer/page/page';


const mapStateToProps = (state) => ({
  activeFilm: state[NameSpace.FILMS].activeFilm,
});

const mapDispatchToProps = (dispatch) => ({
  pushReview(review) {
    dispatch(ReviewsOperation.pushReview(review));
  },
  setActivePage(pageName) {
    dispatch(PageActionCreator.setActivePage(pageName));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
