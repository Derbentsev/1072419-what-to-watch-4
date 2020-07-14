import App from './app';
import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
  activeFilm: state.activeFilm,
  activeFullVideoPlayer: state.activeFullVideoPlayer,
});


export default connect(mapStateToProps)(App);
