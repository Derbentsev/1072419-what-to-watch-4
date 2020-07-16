import MoviePage from './movie-page';
import {connect} from 'react-redux';
import {ActionCreator} from '@reducer/player/player';
import NameSpace from '@reducer/name-space';


const mapStateToProps = (state) => ({
  films: state[NameSpace.DATA].films,
  activeFilm: state[NameSpace.FILM].activeFilm,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnPlayClick(film) {
    dispatch(ActionCreator.setActiveFullVideoPlayer(film));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
