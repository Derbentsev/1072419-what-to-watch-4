import MyList from './my-list';
import {Operation as FilmsOperation} from '@reducer/films/films';
import {connect} from 'react-redux';
import NameSpace from '@reducer/name-space';


const mapStateToProps = (state) => ({
  favoriteFilms: state[NameSpace.FILMS].favoriteFilms,
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteFilms() {
    dispatch(FilmsOperation.loadFavoriteFilms());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(MyList);
