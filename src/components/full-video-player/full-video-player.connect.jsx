import FullVideoPlayer from './full-video-player';
import {connect} from 'react-redux';
import {ActionCreator} from '@reducer/player/player';
import NameSpace from '@reducer/name-space';


const mapStateToProps = (state) => ({
  activeFullVideoPlayer: state[NameSpace.PLAYER].activeFullVideoPlayer,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnExitClick() {
    dispatch(ActionCreator.setActiveFullVideoPlayer(null));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(FullVideoPlayer);
