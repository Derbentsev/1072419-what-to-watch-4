import MoviePage from './movie-page';
import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
  films: state.appReducer.films,
  activeFilm: state.appReducer.activeFilm,
});


export default connect(mapStateToProps)(MoviePage);
