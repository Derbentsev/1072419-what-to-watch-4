import FiltersByGenre from './filters-by-genre';
import {connect} from 'react-redux';
import {ActionCreator} from '@reducer/filter/filter';
import NameSpace from '@reducer/name-space';


const mapStateToProps = (state) => ({
  currentFilter: state[NameSpace.FILTER].currentFilter,
  films: state[NameSpace.FILMS].films,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(filterName) {
    dispatch(ActionCreator.changeFilter(filterName));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(FiltersByGenre);
