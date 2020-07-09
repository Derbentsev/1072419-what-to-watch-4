import MoviePage from './movie-page';
import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
  films: state.films,
  activeFilm: state.activeFilm,
});


export default connect(mapStateToProps)(MoviePage);
