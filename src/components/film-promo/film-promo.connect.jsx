import NameSpace from '@reducer/name-space';
import {connect} from 'react-redux';
import FilmPromo from '@components/film-promo/film-promo';
import {Operation as FilmsOperation} from '@reducer/films/films';


const mapStateToProps = (state) => ({
  filmPromo: state[NameSpace.FILMS].filmPromo,
  authorizationStatus: state[NameSpace.USER].authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  setFavoriteFilm(isFavorite, filmId) {
    dispatch(FilmsOperation.updateFilm(isFavorite, filmId));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(FilmPromo);
