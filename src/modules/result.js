import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from '../libs/createRequestSaga';
import { produce } from 'immer';

const [CONTRACT_RESULT, CONTRACT_RESULT_SUCCESS, CONTRACT_RESULT_FAILURE] = createRequestActionTypes(
  'result/CONTRACT_RESULT',
);

const [BUILDING_RESULT, BUILDING_RESULT_SUCCESS, BUILDING_RESULT_FAILURE] = createRequestActionTypes(
  'result/BUILDING_RESULT',
);

const [REGISTER_RESULT, REGISTER_RESULT_SUCCESS, REGISTER_RESULT_FAILURE] = createRequestActionTypes(
  'result/REGISTER_RESULT',
);

export const contractResult = createAction(CONTRACT_RESULT);
export const contractResultSuccess = createAction(CONTRACT_RESULT_SUCCESS,);
export const contractResultFailure = createAction(CONTRACT_RESULT_FAILURE,);

export const buildingResult = createAction(BUILDING_RESULT);
export const buildingResultSuccess = createAction(BUILDING_RESULT_SUCCESS,);
export const buildingResultFailure = createAction(BUILDING_RESULT_FAILURE,);

export const registerResult = createAction(REGISTER_RESULT);
export const registerResultSuccess = createAction(REGISTER_RESULT_SUCCESS,);
export const registerResultFailure = createAction(REGISTER_RESULT_FAILURE,);

const initialState = {
  contractResult: {
    result: null,
    error: null,
  },
  buildingResult: {
    result: null,
    error: null,
  },
  registerResult: {
    result: null,
    error: null,
  },
}

const result = handleActions(
  {
    [CONTRACT_RESULT_SUCCESS]: (state, { payload: {form, key, value}}) => 
    produce(state, draft => {
        draft[form][key] = value;
    }),
    [CONTRACT_RESULT_FAILURE]: (state, { payload: {form, key, value}}) => 
    produce(state, draft => {
        draft[form][key] = value;
    }),
    [BUILDING_RESULT_SUCCESS]: (state, { payload: {form, key, value}}) => 
    produce(state, draft => {
        draft[form][key] = value;
    }),
    [BUILDING_RESULT_FAILURE]: (state, { payload: {form, key, value}}) => 
    produce(state, draft => {
        draft[form][key] = value;
    }),
    [REGISTER_RESULT_SUCCESS]: (state, { payload: {form, key, value}}) => 
    produce(state, draft => {
        draft[form][key] = value;
    }),
    [REGISTER_RESULT_FAILURE]: (state, { payload: {form, key, value}}) => 
    produce(state, draft => {
        draft[form][key] = value;
    }),
  },
  initialState,
)

export default result;