import {combineReducers} from 'redux';
import {reducer as film} from './film/film';
import {reducer as player} from './player/player';
import {reducer as data} from './data/data';
import {reducer as filter} from './filter/filter';
import {reducer as user} from './user/user';
import NameSpace from './name-space';


export default combineReducers({
  [NameSpace.FILM]: film,
  [NameSpace.PLAYER]: player,
  [NameSpace.DATA]: data,
  [NameSpace.FILTER]: filter,
  [NameSpace.USER]: user,
});
