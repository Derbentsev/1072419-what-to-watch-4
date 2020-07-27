import App from './app';
import {connect} from 'react-redux';
import NameSpace from '@reducer/name-space';


const mapStateToProps = (state) => ({
  activeFilm: state[NameSpace.FILMS].activeFilm,
  activeFullVideoPlayer: state[NameSpace.PLAYER].activeFullVideoPlayer,
  activePage: state[NameSpace.PAGE].activePage,
});


export default connect(mapStateToProps)(App);
