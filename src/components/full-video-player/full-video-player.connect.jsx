import FullVideoPlayer from './full-video-player';
import {connect} from 'react-redux';
import {ActionCreator} from '@reducer/player/player';
import withFullVideoPlayer from '@hocs/with-full-video-player/with-full-video-player';


const mapStateToProps = (state) => ({
  activeFullVideoPlayer: state.activeFullVideoPlayer,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnExitClick() {
    dispatch(ActionCreator.setActiveFullVideoPlayer(null));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withFullVideoPlayer(FullVideoPlayer));
