import App from './app';
import {connect} from 'react-redux';
import {Operation as DataOperation} from '@reducer/films/films';
import {Operation as UserOperation} from '@reducer/user/user';


const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => {
    dispatch(UserOperation.checkAuth());
  },
  loadFilms: () => {
    dispatch(DataOperation.loadFilms());
  },
  loadFilmPromo: () => {
    dispatch(DataOperation.loadFilmPromo());
  },
});


export default connect(null, mapDispatchToProps)(App);
