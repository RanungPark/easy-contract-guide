import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading';
// import { all } from 'redux-saga/effects';
import user from './user';
import file from './file';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  file,
})

export function* rootSaga() {
  // yield all([authSaga()]);
}

export default rootReducer