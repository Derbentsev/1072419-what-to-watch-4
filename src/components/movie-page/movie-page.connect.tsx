import MoviePage from './movie-page';
import {connect} from 'react-redux';
import {Operation as ReviewsOperation} from '@reducer/reviews/reviews';
import {Operation as FilmsOperation} from '@reducer/films/films';
import NameSpace from '@reducer/name-space';
import {getFilmById} from '@reducer/films/selectors';


const mapStateToProps = (state) => ({
  films: state[NameSpace.FILMS].films,
  authorizationStatus: state[NameSpace.USER].authorizationStatus,
  getFilmById: (filmId) => getFilmById(state, filmId),
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews(filmId) {
    dispatch(ReviewsOperation.loadReviews(filmId));
  },
  setFavoriteFilm(isFavorite, filmId) {
    dispatch(FilmsOperation.updateFilm(isFavorite, filmId));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
