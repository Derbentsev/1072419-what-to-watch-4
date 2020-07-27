import NameSpace from '@reducer/name-space';
import {connect} from 'react-redux';
import FilmPromo from '@components/film-promo/film-promo';
import {ActionCreator as ActionCreatorPlayer} from '@reducer/player/player';
import {Operation as FilmsOperation} from '@reducer/films/films';


const mapStateToProps = (state) => ({
  filmPromo: state[NameSpace.FILMS].filmPromo,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnPlayClick(film) {
    dispatch(ActionCreatorPlayer.setActiveFullVideoPlayer(film));
  },
  setFavoriteFilm(isFavorite, filmId) {
    dispatch(FilmsOperation.setFavoriteFilm(isFavorite, filmId));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(FilmPromo);
