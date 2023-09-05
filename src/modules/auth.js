import { produce } from 'immer';
import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../libs/createRequestSaga';
import * as authAPI from '../libs/api/auth';
import { takeLatest } from 'redux-saga/effects';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const TOGGLE_TRUE_CHECK = 'auth/TOGGLE_TRUE_CHECK';
const TOGGLE_FALSE_CHECK = 'auth/TOGGLE_FALSE_CHECK';
const TOGGLE_ALL_TRUE_CHECK = 'auth/TOGGLE_ALL_TRUE_CHECK';
const TOGGLE_ALL_FALSE_CHECK = 'auth/TOGGLE_ALL_FALSE_CHECK';

const [REGISTER, REGISTER_SUCCESS, REGUISTER_FAILURE] = createRequestActionTypes(
  'auth/REGISTER',
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN',
);

export const changeField = createAction(
  CHANGE_FIELD,
  ({form, key, value}) => ({
    form,
    key,
    value
  }),
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);

export const toggleTrueCheck = createAction(
  TOGGLE_TRUE_CHECK, 
  ({form, key}) => ({
    form,
    key,
  }),
);

export const toggleFalseCheck = createAction(
  TOGGLE_FALSE_CHECK, 
  ({form, key}) => ({
    form,
    key,
  }),
);

export const toggleAllTrueCheck = createAction(TOGGLE_ALL_TRUE_CHECK, form => form)
export const toggleAllFalseCheck = createAction(TOGGLE_ALL_FALSE_CHECK, form => form)

export const register = createAction(REGISTER, ({ email, password, allCheck ,username}) => ({
  email,
  password,
  allCheck,
  username,
}));

export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
  password
}));

export const registerSuccess = createAction(REGISTER_SUCCESS, response => response);

export const registerFailure = createAction(REGUISTER_FAILURE, response => response);

// const registerSaga = createRequestSaga(REGISTER, authAPI.register);
// const loginSaga = createRequestSaga(LOGIN, authAPI.login);
// export function* authSaga() {
//   yield takeLatest(REGISTER, registerSaga);
//   yield takeLatest(LOGIN, loginSaga);
// }

const initialState = {
  register: {
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
  },
  check: {
    allCheck: false,
    firstCheck: false,
    secondCheck: false,
    thirdCheck: false,
  },
  login: {
    email: '',
    password: '',
  },
  auth: null,
  authError: null,
}

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value}}) =>
    produce(state, draft => {
      draft[form][key] = value;
    }),
    [INITIALIZE_FORM]: (state, { payload: form}) => ({
      ...state,
      [form] : initialState[form]
    }),
    [TOGGLE_TRUE_CHECK]: (state, { payload: { form, key}}) =>
    produce(state, draft => {
      draft[form][key] = true;
    }),
    [TOGGLE_FALSE_CHECK]: (state, { payload: { form, key}}) =>
    produce(state, draft => {
      draft[form][key] = false;
    }),
    [TOGGLE_ALL_TRUE_CHECK]:(state, { payload: form}) =>
    produce(state, draft => {
      draft[form].allCheck = true;
      draft[form].firstCheck = true;
      draft[form].secondCheck = true;
      draft[form].thirdCheck = true;
    }),
    [TOGGLE_ALL_FALSE_CHECK]:(state, { payload: form}) =>
    produce(state, draft => {
      draft[form].allCheck = false;
      draft[form].firstCheck = false;
      draft[form].secondCheck = false;
      draft[form].thirdCheck = false;
    }),
    [REGISTER_SUCCESS]: (state, { payload: auth}) => ({
      ...state,
      authError: null,
      auth,
    }),
    [REGUISTER_FAILURE]: (state, { payload: error}) => ({
      ...state,
      authError: error,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth}) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error}) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);

export default auth