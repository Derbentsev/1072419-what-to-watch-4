import App from './app';
import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
  activeFilm: state.appReducer.activeFilm,
});


export default connect(mapStateToProps)(App);
