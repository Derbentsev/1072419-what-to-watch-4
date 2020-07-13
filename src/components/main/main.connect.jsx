import Main from './main';
import {connect} from 'react-redux';
import {getFilmsByGenre} from './selectors/index';
import {ActionCreator} from '@reducer/reducer';


const mapStateToProps = (state) => ({
  films: getFilmsByGenre(state),
  showedFilmsCount: state.showedFilmsCount,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnPlayClick(film) {
    dispatch(ActionCreator.setActiveFullVideoPlayer(film));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);
