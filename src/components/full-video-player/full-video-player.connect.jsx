import FullVideoPlayer from './full-video-player';
import {connect} from 'react-redux';
import {ActionCreator} from '@reducer/player/player';
import withFullVideoPlayer from '@hocs/with-full-video-player/with-full-video-player';
import NameSpace from '@reducer/name-space';


const mapStateToProps = (state) => ({
  activeFullVideoPlayer: state[NameSpace.DATA].filmPromo,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnExitClick() {
    dispatch(ActionCreator.setActiveFullVideoPlayer(null));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withFullVideoPlayer(FullVideoPlayer));
