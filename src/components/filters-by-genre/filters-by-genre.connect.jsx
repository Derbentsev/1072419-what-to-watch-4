import FiltersByGenre from './filters-by-genre';
import {connect} from 'react-redux';
import {ActionCreator} from './actions/reducer';


const mapStateToProps = (state) => ({
  currentFilter: state.filterReducer.currentFilter,
  films: state.appReducer.films,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(filterName) {
    dispatch(ActionCreator.changeFilter(filterName));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(FiltersByGenre);
