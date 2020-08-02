import FullVideoPlayer from './full-video-player';
import {connect} from 'react-redux';
import {getFilmById} from '@reducer/films/selectors';


const mapStateToProps = (state) => ({
  getFilmById: (filmId) => getFilmById(state, filmId),
});

export default connect(mapStateToProps)(FullVideoPlayer);
