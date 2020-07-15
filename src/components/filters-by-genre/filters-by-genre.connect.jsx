import FiltersByGenre from './filters-by-genre';
import {connect} from 'react-redux';
import {ActionCreator} from '@reducer/filter/filter';


const mapStateToProps = (state) => ({
  currentFilter: state.currentFilter,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(filterName) {
    dispatch(ActionCreator.changeFilter(filterName));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(FiltersByGenre);
