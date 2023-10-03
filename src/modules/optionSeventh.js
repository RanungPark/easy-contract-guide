import { createAction, handleActions } from 'redux-actions'

const CHANGE_TENANT_INPUT_FIRST = 'optionSeventh/CHANGE_TENANT_INPUT_FIRST'
const CHANGE_TENANT_INPUT_SECOND = 'optionSeventh/CHANGE_TENANT_INPUT_SECOND'
const CHANGE_ADDRESS = 'optionSeventh/CHANGE_ADDRESS'
const CHANGE_REST_ADDRESS = 'optionSeventh/CHANGE_REST_ADDRESS'
const CHANGE_PHONE_NUM = 'optionSeventh/CHANGE_PHONE_NUM'

export const changeTenantInputFirst = createAction(CHANGE_TENANT_INPUT_FIRST, tenantInputFirst => tenantInputFirst);
export const changeTenantInputSecond = createAction(CHANGE_TENANT_INPUT_SECOND, tenantInputSecond => tenantInputSecond);
export const changeAddress = createAction(CHANGE_ADDRESS, address => address);
export const changeRestAddress = createAction(CHANGE_REST_ADDRESS, restAddress => restAddress);
export const changePhoneNum = createAction(CHANGE_PHONE_NUM, phoneNum => phoneNum);

const initialState = {
  tenantInputFirst: '',
  tenantInputSecond: '',
  address: '',
  restAddress: '',
  phoneNum: '',
}

const optionSeventh = handleActions(
  {
    [CHANGE_TENANT_INPUT_FIRST] : (state, {payload : tenantInputFirst}) => ({
      ...state,
      tenantInputFirst,
    }),
    [CHANGE_TENANT_INPUT_SECOND] : (state, {payload : tenantInputSecond}) => ({
      ...state,
      tenantInputSecond,
    }),
    [CHANGE_ADDRESS] : (state, {payload : address}) => ({
      ...state,
      address,
    }),
    [CHANGE_REST_ADDRESS] : (state, {payload : restAddress}) => ({
      ...state,
      restAddress,
    }),
    [CHANGE_PHONE_NUM] : (state, {payload : phoneNum}) => ({
      ...state,
      phoneNum,
    }),
  },
  initialState
);

export default optionSeventh