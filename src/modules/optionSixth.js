import { createAction, handleActions } from 'redux-actions'

const CHANGE_HOST_INPUT_FIRST = 'optionSixth/CHANGE_HOST_INPUT_FIRST'
const CHANGE_HOST_INPUT_SECOND = 'optionSixth/CHANGE_HOST_INPUT_SECOND'
const CHANGE_ADDRESS = 'optionSixth/CHANGE_ADDRESS'
const CHANGE_REST_ADDRESS = 'optionSixth/CHANGE_REST_ADDRESS'
const CHANGE_PHONE_NUM = 'optionSixth/CHANGE_PHONE_NUM'

export const changeHostInputFirst = createAction(CHANGE_HOST_INPUT_FIRST, hostInputFirst => hostInputFirst);
export const changeHostInputSecond = createAction(CHANGE_HOST_INPUT_SECOND, hostInputSecond => hostInputSecond);
export const changeAddress = createAction(CHANGE_ADDRESS, address => address);
export const changeRestAddress = createAction(CHANGE_REST_ADDRESS, restAddress => restAddress);
export const changePhoneNum = createAction(CHANGE_PHONE_NUM, phoneNum => phoneNum);

const initialState = {
  hostInputFirst: '',
  hostInputSecond: '',
  address: '',
  restAddress: '',
  phoneNum: '',
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

export default optionSixth