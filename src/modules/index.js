import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading';
import user from './user';
import file from './file';
import result from './result';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  file,
  result,
})

export function* rootSaga() {

}

export default rootReducer