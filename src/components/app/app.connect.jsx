import App from './app';
import {connect} from 'react-redux';
import NameSpace from '@reducer/name-space';
import {Operation as DataOperation} from '@reducer/films/films';
import {Operation as UserOperation} from '@reducer/user/user';


const mapStateToProps = (state) => ({
  activePage: state[NameSpace.PAGE].activePage,
});

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


export default connect(mapStateToProps, mapDispatchToProps)(App);
