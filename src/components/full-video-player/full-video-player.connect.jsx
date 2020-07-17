import FullVideoPlayer from './full-video-player';
import {connect} from 'react-redux';
import {ActionCreator} from '@reducer/player/player';
import {getFilmById} from '@reducer/films/selectors';


const mapStateToProps = (state) => ({
  activeFullVideoPlayer: (filmId) => getFilmById(state, filmId),
});

const mapDispatchToProps = (dispatch) => ({
  handleOnExitClick() {
    dispatch(ActionCreator.setActiveFullVideoPlayer(null));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(FullVideoPlayer);
