import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../libs/createRequestSaga';
import * as authAPI from '../libs/api/auth';
import { call, takeLatest } from 'redux-saga/effects';

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [CHECK_USER, CHECK_USER_SUCCESS, CHECK_USER_FAILURE] = createRequestActionTypes(
  'user/CHECK_USER',
);

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const checkUser = createAction(CHECK_USER);

export const checkUserSuccess = createAction(CHECK_USER_SUCCESS, response => response);
export const checkUserFailure = createAction(CHECK_USER_FAILURE, response => response);

const checkSaga = createRequestSaga(CHECK_USER, authAPI.check);

export function* userSaga() {
  yield takeLatest(CHECK_USER, checkSaga);
};

const initialState = {
  user: null,
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, {payload: user}) => ({
      ...state,
      user,
    }),
    [CHECK_USER_SUCCESS]: (state, {payload: user}) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_USER_FAILURE]: (state, {payload: error}) => ({
      ...state,
      user: null,
      checkError: error,
    }),
  },initialState,
)