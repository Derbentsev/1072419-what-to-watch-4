import FullVideoPlayer from './full-video-player';
import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
  activeFullVideoPlayer: state.activeFullVideoPlayer,
});

export default connect(mapStateToProps)(FullVideoPlayer);
