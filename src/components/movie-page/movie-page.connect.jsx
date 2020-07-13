import MoviePage from './movie-page';
import {connect} from 'react-redux';
import {ActionCreator} from '@reducer/reducer';


const mapStateToProps = (state) => ({
  films: state.films,
  activeFilm: state.activeFilm,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnPlayClick(film) {
    dispatch(ActionCreator.setActiveFullVideoPlayer(film));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
