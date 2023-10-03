import { createAction, handleActions } from 'redux-actions'

const CHANGE_TENANT_INPUT_FIRST = 'optionSeventh/CHANGE_TENANT_INPUT_FIRST'
const CHANGE_TENANT_INPUT_SECOND = 'optionSeventh/CHANGE_TENANT_INPUT_SECOND'
const CHANGE_TENANT_ADDRESS = 'optionSeventh/CHANGE_TENANT_ADDRESS'
const CHANGE_TENANT_REST_ADDRESS = 'optionSeventh/CHANGE_TENANT_REST_ADDRESS'
const CHANGE_TENANT_PHONE_NUM = 'optionSeventh/CHANGE_TENANT_PHONE_NUM'

export const changeTenantInputFirst = createAction(CHANGE_TENANT_INPUT_FIRST, tenantInputFirst => tenantInputFirst);
export const changeTenantInputSecond = createAction(CHANGE_TENANT_INPUT_SECOND, tenantInputSecond => tenantInputSecond);
export const changeTenantAddress = createAction(CHANGE_TENANT_ADDRESS, tenantAddress => tenantAddress);
export const changeTenantRestAddress = createAction(CHANGE_TENANT_REST_ADDRESS, tenantRestAddress => tenantRestAddress);
export const changeTenantPhoneNum = createAction(CHANGE_TENANT_PHONE_NUM, tenantPhoneNum => tenantPhoneNum);

const initialState = {
  tenantInputFirst: '',
  tenantInputSecond: '',
  tenantAddress: '',
  tenantRestAddress: '',
  tenantPhoneNum: '',
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
    [CHANGE_TENANT_ADDRESS] : (state, {payload : tenantAddress}) => ({
      ...state,
      tenantAddress,
    }),
    [CHANGE_TENANT_REST_ADDRESS] : (state, {payload : tenantRestAddress}) => ({
      ...state,
      tenantRestAddress,
    }),
    [CHANGE_TENANT_PHONE_NUM] : (state, {payload : tenantPhoneNum}) => ({
      ...state,
      tenantPhoneNum,
    }),
  },
  initialState
);

export default optionSeventh