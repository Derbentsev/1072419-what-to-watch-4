import {combineReducers} from 'redux';
import {reducer as films} from './films/films';
import {reducer as player} from './player/player';
import {reducer as filter} from './filter/filter';
import {reducer as user} from './user/user';
import NameSpace from './name-space';


export default combineReducers({
  [NameSpace.FILMS]: films,
  [NameSpace.PLAYER]: player,
  [NameSpace.FILTER]: filter,
  [NameSpace.USER]: user,
});
