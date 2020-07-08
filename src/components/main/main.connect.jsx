import Main from './main';
import {connect} from 'react-redux';
import {getFilmsByGenre} from './selectors/index';


const mapStateToProps = (state) => ({
  films: getFilmsByGenre(state.films, state.currentFilter),
  showedFilmsCount: state.showedFilmsCount,
});


export default connect(mapStateToProps)(Main);
