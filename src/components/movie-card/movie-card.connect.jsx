import MovieCard from './movie-card';
import {connect} from 'react-redux';
import {ActionCreator} from '@components/app/reducer/reducer';


const mapDispatchToProps = (dispatch) => ({
  handleMovieCardClick(film) {
    dispatch(ActionCreator.setActiveFilm(film));
  },
});

export default connect(null, mapDispatchToProps)(MovieCard);
