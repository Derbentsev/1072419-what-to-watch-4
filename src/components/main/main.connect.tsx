import Main from './main';
import {connect} from 'react-redux';
import {getFilmsByGenre} from '@reducer/films/selectors';
import withMain from '@hocs/with-main/with-main';


const mapStateToProps = (state) => ({
  films: getFilmsByGenre(state),
});


export default connect(mapStateToProps)(withMain(Main));
