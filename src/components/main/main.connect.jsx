import Main from './main';
import {connect} from 'react-redux';
import {getFilmsByGenre} from '@reducer/films/selectors';
import {ActionCreator as ActionCreatorPlayer} from '@reducer/player/player';
import withMain from '@hocs/with-main/with-main';
import NameSpace from '@reducer/name-space';
import {Operation as FilmsOperation, ActionCreator as ActionCreatorFilms} from '@reducer/films/films';


const mapStateToProps = (state) => ({
  films: getFilmsByGenre(state),
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


export default connect(mapStateToProps, mapDispatchToProps)(withMain(Main));
