import MoviePage from './movie-page';
import {connect} from 'react-redux';
import {ActionCreator as PlayerActionCreator} from '@reducer/player/player';
import {ActionCreator as PageActionCreator} from '@reducer/page/page';
import {Operation as ReviewsOperation} from '@reducer/reviews/reviews';
import NameSpace from '@reducer/name-space';


const mapStateToProps = (state) => ({
  films: state[NameSpace.FILMS].films,
  activeFilm: state[NameSpace.FILMS].activeFilm,
  reviews: state[NameSpace.REVIEWS].reviews,
  authorizationStatus: state[NameSpace.USER].authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnPlayClick(film) {
    dispatch(PlayerActionCreator.setActiveFullVideoPlayer(film));
  },
  loadReviews() {
    dispatch(ReviewsOperation.loadReviews());
  },
  setActivePage(pageName) {
    dispatch(PageActionCreator.setActivePage(pageName));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
