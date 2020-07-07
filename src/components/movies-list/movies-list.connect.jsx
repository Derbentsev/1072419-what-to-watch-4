import MoviesList from './movies-list';
import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
  films: state.appReducer.films,
});


export default connect(mapStateToProps)(MoviesList);
