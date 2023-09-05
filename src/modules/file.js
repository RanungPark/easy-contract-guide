import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../libs/createRequestSaga';
// import { produce } from 'immer';
import * as fileAPI from '../libs/api/file';
import { takeLatest } from 'redux-saga/effects';


// const CHANGE_FILE = 'file/CHANGE_FILE';
// const INITIALIZE_FORM = 'file/INITIALIZE_FORM';

const [CONTRACT_UPLOADFILE, CONTRACT_UPLOADFILE_SUCCESS, CONTRACT_UPLOADFILE_FAILURE] = createRequestActionTypes(
  'file/CONTRACT_UPLOADFILE',
);

const [BUILDING_UPLOADFILE, BUILDING_UPLOADFILE_SUCCESS, BUILDING_UPLOADFILE_FAILURE] = createRequestActionTypes(
  'file/BUILDING_UPLOADFILE',
);

const [REGISTER_UPLOADFILE, REGISTER_UPLOADFILE_SUCCESS, REGISTER_UPLOADFILE_FAILURE] = createRequestActionTypes(
  'file/REGISTER_UPLOADFILE',
);

const FIX_USER_ID = 'file/FIX_USER_ID';

const FIX_CONTRACT_ID = 'file/FIX_CONTRACT_ID';

// export const changeFile = createAction(
//   CHANGE_FILE,
//   ({form, key, value}) => ({
//     form,
//     key,
//     value
//   })
// );


// export const initializeForm = createAction(INITIALIZE_FORM, form => form);


export const contractUploadfile = createAction(CONTRACT_UPLOADFILE, ({userId, pdfFile}) => ({
  userId,
  pdfFile
}));

export const buildingUploadfile = createAction(BUILDING_UPLOADFILE, ({contractId, pdfFile}) => ({
  contractId,
  pdfFile
}));

export const registerUploadfile = createAction(REGISTER_UPLOADFILE, ({contractId, pdfFile}) => ({
  contractId,
  pdfFile
}));

export const fixUserId = createAction(FIX_USER_ID, userId => userId);
export const fixContractId = createAction(FIX_CONTRACT_ID, contractId => contractId);


const contractUploadfileSaga = createRequestSaga(CONTRACT_UPLOADFILE, fileAPI.contract);
const buildingUploadfileSaga = createRequestSaga(BUILDING_UPLOADFILE, fileAPI.building);
const registerUploadfileSaga = createRequestSaga(REGISTER_UPLOADFILE, fileAPI.register);

export function* fileSaga() {
  yield takeLatest(CONTRACT_UPLOADFILE, contractUploadfileSaga);
  yield takeLatest(BUILDING_UPLOADFILE, buildingUploadfileSaga);
  yield takeLatest(REGISTER_UPLOADFILE, registerUploadfileSaga);
}

const initialState = {
  // contract: {
  //   pdfFile: {},
  // },
  // building: {
  //   pdfFile: {},
  // },
  // register: {
  //   pdfFile: {},
  // },
  file: null,
  fileError: null,
  userId: '',
  contractId: '',
}

const file = handleActions(
  {
    // [CHANGE_FILE]: (state, { payload: { form, key, value}}) =>
    // produce(state, draft => {
    //   draft[form][key] = value;
    // }),
    // [INITIALIZE_FORM]: (state, { payload: form}) => ({
    //   ...state,
    //   [form] : initialState[form]
    // }),
    [CONTRACT_UPLOADFILE_SUCCESS]: (state, { payload: file}) => ({
      ...state,
      fileError: null,
      file,
    }),
    [CONTRACT_UPLOADFILE_FAILURE]: (state, { payload: error}) => ({
      ...state,
      fileError: error,
    }),
    [BUILDING_UPLOADFILE_SUCCESS]: (state, { payload: file}) => ({
      ...state,
      fileError: null,
      file,
    }),
    [BUILDING_UPLOADFILE_FAILURE]: (state, { payload: error}) => ({
      ...state,
      fileError: error,
    }),
    [REGISTER_UPLOADFILE_SUCCESS]: (state, { payload: file}) => ({
      ...state,
      fileError: null,
      file,
    }),
    [REGISTER_UPLOADFILE_FAILURE]: (state, { payload: error}) => ({
      ...state,
      fileError: error,
    }),
    [FIX_USER_ID]: (state, {payload: userId}) => ({
      ...state,
      userId,
    }),
    [FIX_CONTRACT_ID]: (state, {payload: contractId}) => ({
      ...state,
      contractId,
    }),
  },
  initialState,
)

export default file