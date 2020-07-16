import App from './app';
import {connect} from 'react-redux';
import NameSpace from '@reducer/name-space';


const mapStateToProps = (state) => ({
  activeFilm: state[NameSpace.FILM].activeFilm,
  activeFullVideoPlayer: state[NameSpace.PLAYER].activeFullVideoPlayer,
});


export default connect(mapStateToProps)(App);
