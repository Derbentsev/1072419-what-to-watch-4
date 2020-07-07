import Main from './main';
import {connect} from 'react-redux';
import {getFilmsByGenre} from './selectors/index';


const mapStateToProps = (state) => ({
  films: getFilmsByGenre(state.appReducer.films, state.filterReducer.currentFilter),
});


export default connect(mapStateToProps)(Main);
