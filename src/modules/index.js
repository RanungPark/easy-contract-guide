import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading';
import user from './user';
import file from './file';
import result from './result';
import optionFirst from './optionFirst';
import optionSecond from './optionSecond';
import optionThird from './optionThird';
import optionFourth from './optionFourth';
import optionFifth from './optionFifth';
import optionSixth from './optionSixth';
import optionSeventh from './optionSeventh';
import menu from './menu';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  file,
  result,
  optionFirst,
  optionSecond,
  optionThird,
  optionFourth,
  optionFifth,
  optionSixth,
  optionSeventh,
  menu,
})

export function* rootSaga() {

}

export default rootReducer