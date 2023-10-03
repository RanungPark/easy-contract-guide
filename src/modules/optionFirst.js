import { createAction, handleActions } from 'redux-actions'

const CHANGE_HOST_TYPE = 'optionFirst/CHANGE_HOST_TYPE'
const CHANGE_HOST = 'optionFirst/CHANGE_HOST'

const CHANGE_TENANT_TYPE = 'optionFirst/CHANGE_TENANT_TYPE'
const CHANGE_TENANT = 'optionFirst/CHANGE_TENANT'

export const changeHostType = createAction(CHANGE_HOST_TYPE, hostType => hostType);
export const changeHost = createAction(CHANGE_HOST, host => host);

export const changeTenantType = createAction(CHANGE_TENANT_TYPE, tenantType => tenantType);
export const changeTenant = createAction(CHANGE_TENANT, tenant => tenant);

const initialState = {
  hostType: '',
  host: '',
  tenantType: '',
  tenant: '',
};

const optionFirst = handleActions(
  {
    [CHANGE_HOST_TYPE] : (state, {payload : hostType}) => ({
      ...state,
      hostType,
    }),
    [CHANGE_HOST] : (state, {payload : host}) => ({
      ...state,
      host,
    }),
    [CHANGE_TENANT_TYPE] : (state, {payload : tenantType}) => ({
      ...state,
      tenantType,
    }),
    [CHANGE_TENANT] : (state, {payload : tenant}) => ({
      ...state,
      tenant,
    }),
  },
  initialState
);

export default optionFirst