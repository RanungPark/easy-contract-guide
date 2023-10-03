import { createAction, handleActions } from 'redux-actions'

const CHANGE_TYPE = 'optionSecond/CHANGE_HOST_TYPE'
const CHANGE_START_DAY = 'optionSecond/CHANGE_START_DAY'
const CHANGE_END_DAY = 'optionSecond/CHANGE_END_DAY'
const CHANGE_MONTHLY_RENT = 'optionSecond/CHANGE_MONTHLY_RENT'
const CHANGE_PAYMENT_DATE = 'optionSecond/CHANGE_PAYMENT_DATE'

export const changeType = createAction(CHANGE_TYPE, type => type);
export const changeStartDay = createAction(CHANGE_START_DAY, startDay => startDay);
export const changeEndDay = createAction(CHANGE_END_DAY, endDay => endDay);
export const changeMonthlyRent = createAction(CHANGE_MONTHLY_RENT, monthlyRent => monthlyRent);
export const changePaymentDate = createAction(CHANGE_PAYMENT_DATE, paymentDate => paymentDate);

const initialState = {
  type: '',
  startDay: '',
  endDay: '',
  monthlyRent: '',
  paymentDate: '',
}

const optionSecond = handleActions(
  {
    [CHANGE_TYPE] : (state, {payload : type}) => ({
      ...state,
      type,
    }),
    [CHANGE_START_DAY] : (state, {payload : startDay}) => ({
      ...state,
      startDay,
    }),
    [CHANGE_END_DAY] : (state, {payload : endDay}) => ({
      ...state,
      endDay,
    }),
    [CHANGE_MONTHLY_RENT] : (state, {payload : monthlyRent}) => ({
      ...state,
      monthlyRent,
    }),
    [CHANGE_PAYMENT_DATE] : (state, {payload : paymentDate}) => ({
      ...state,
      paymentDate,
    }),
  },
  initialState
);

export default optionSecond