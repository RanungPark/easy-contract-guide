import { createAction, handleActions } from 'redux-actions'

const CHANGE_HOST_INPUT_FIRST = 'optionSixth/CHANGE_HOST_INPUT_FIRST'
const CHANGE_HOST_INPUT_SECOND = 'optionSixth/CHANGE_HOST_INPUT_SECOND'
const CHANGE_HOST_ADDRESS = 'optionSixth/CHANGE_ADDRESS'
const CHANGE_HOST_REST_ADDRESS = 'optionSixth/CHANGE_REST_ADDRESS'
const CHANGE_HOST_PHONE_NUM = 'optionSixth/CHANGE_PHONE_NUM'

export const changeHostInputFirst = createAction(CHANGE_HOST_INPUT_FIRST, hostInputFirst => hostInputFirst);
export const changeHostInputSecond = createAction(CHANGE_HOST_INPUT_SECOND, hostInputSecond => hostInputSecond);
export const changeHostAddress = createAction(CHANGE_HOST_ADDRESS, hostAddress => hostAddress);
export const changeHostRestAddress = createAction(CHANGE_HOST_REST_ADDRESS, hostRestAddress => hostRestAddress);
export const changeHostPhoneNum = createAction(CHANGE_HOST_PHONE_NUM, hostPhoneNum => hostPhoneNum);

const initialState = {
  hostInputFirst: '',
  hostInputSecond: '',
  hostAddress: '',
  hostRestAddress: '',
  hostPhoneNum: '',
}

const optionSixth = handleActions(
  {
    [CHANGE_HOST_INPUT_FIRST] : (state, {payload : hostInputFirst}) => ({
      ...state,
      hostInputFirst,
    }),
    [CHANGE_HOST_INPUT_SECOND] : (state, {payload : hostInputSecond}) => ({
      ...state,
      hostInputSecond,
    }),
    [CHANGE_HOST_ADDRESS] : (state, {payload : hostAddress}) => ({
      ...state,
      hostAddress,
    }),
    [CHANGE_HOST_REST_ADDRESS] : (state, {payload : hostRestAddress}) => ({
      ...state,
      hostRestAddress,
    }),
    [CHANGE_HOST_PHONE_NUM] : (state, {payload : hostPhoneNum}) => ({
      ...state,
      hostPhoneNum,
    }),
  },
  initialState
);

export default optionSixth