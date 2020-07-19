import App from './app';
import {connect} from 'react-redux';
import NameSpace from '@reducer/name-space';
import {Operation as UserOperation} from '@reducer/user/user';


const mapStateToProps = (state) => ({
  activeFilm: state[NameSpace.FILMS].activeFilm,
  activeFullVideoPlayer: state[NameSpace.PLAYER].activeFullVideoPlayer,
  authorizationStatus: state[NameSpace.USER].authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
