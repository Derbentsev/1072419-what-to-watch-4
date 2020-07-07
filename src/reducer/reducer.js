import appReducer from '@components/app/reducer/reducer';
import filterReducer from '@components/filters-by-genre/actions/reducer';
import {combineReducers} from 'redux';


export default combineReducers({
  appReducer,
  filterReducer,
});
