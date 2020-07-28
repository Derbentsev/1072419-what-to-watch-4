import MoviePage from './movie-page';
import {connect} from 'react-redux';
import {ActionCreator as PlayerActionCreator} from '@reducer/player/player';
import {ActionCreator as PageActionCreator} from '@reducer/page/page';
import {Operation as ReviewsOperation} from '@reducer/reviews/reviews';
import {Operation as FilmsOperation} from '@reducer/films/films';
import NameSpace from '@reducer/name-space';
import {getFilmById} from '@reducer/films/selectors';


const mapStateToProps = (state) => ({
  films: state[NameSpace.FILMS].films,
  reviews: state[NameSpace.REVIEWS].reviews,
  authorizationStatus: state[NameSpace.USER].authorizationStatus,
  getFilmById: (filmId) => getFilmById(state, filmId),
});

const mapDispatchToProps = (dispatch) => ({
  handleOnPlayClick(film) {
    dispatch(PlayerActionCreator.setActiveFullVideoPlayer(film));
  },
  loadReviews(filmId) {
    dispatch(ReviewsOperation.loadReviews(filmId));
  },
  setActivePage(pageName) {
    dispatch(PageActionCreator.setActivePage(pageName));
  },
  setFavoriteFilm(isFavorite, filmId) {
    dispatch(FilmsOperation.updateFilm(isFavorite, filmId));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
