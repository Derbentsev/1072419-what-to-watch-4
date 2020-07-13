import FullVideoPlayer from './full-video-player';
import {connect} from 'react-redux';
import {ActionCreator} from '@reducer/reducer';


const mapStateToProps = (state) => ({
  activeFullVideoPlayer: state.activeFullVideoPlayer,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnExitClick() {
    dispatch(ActionCreator.setActiveFullVideoPlayer(null));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FullVideoPlayer);
