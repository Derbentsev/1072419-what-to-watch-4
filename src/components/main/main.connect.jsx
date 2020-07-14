import Main from './main';
import {connect} from 'react-redux';
import {getFilmsByGenre} from './selectors/index';
import {ActionCreator} from '@reducer/reducer';
import withMain from '@hocs/with-main/with-main';


const mapStateToProps = (state) => ({
  films: getFilmsByGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleOnPlayClick(film) {
    dispatch(ActionCreator.setActiveFullVideoPlayer(film));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(withMain(Main));
