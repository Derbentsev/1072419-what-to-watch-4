import App from './app';
import {connect} from 'react-redux';
import {Operation as DataOperation} from '@reducer/films/films';
import {Operation as UserOperation} from '@reducer/user/user';


const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(UserOperation.checkAuth());
    dispatch(DataOperation.loadFilms());
    dispatch(DataOperation.loadFilmPromo());
  }
});


export default connect(null, mapDispatchToProps)(App);
