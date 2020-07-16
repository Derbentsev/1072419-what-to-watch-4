import Main from './main';
import {connect} from 'react-redux';
import {getFilmsByGenre} from './selectors/index';
import {ActionCreator} from '@reducer/player/player';
import withMain from '@hocs/with-main/with-main';
import NameSpace from '@reducer/name-space';


const mapStateToProps = (state) => ({
  films: getFilmsByGenre(state),
  filmPromo: state[NameSpace.DATA].filmPromo,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnPlayClick(film) {
    dispatch(ActionCreator.setActiveFullVideoPlayer(film));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(withMain(Main));
