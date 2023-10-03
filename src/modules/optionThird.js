import { createAction, handleActions } from 'redux-actions'

const CHANGE_SUBSIDY = 'optionThird/CHANGE_SUBSIDY'

const CHANGE_DOWN_PAYMENT = 'optionThird/CHANGE_DOWN_PAYMENT'
const CHANGE_PAYER = 'optionThird/CHANGE_PAYER'

const CHANGE_MIDDLE_PAYMENT = 'optionThird/CHANGE_MIDDLE_PAYMENT'
const CHANGE_MIDDLE_PAYMENT_DAY = 'optionThird/CHANGE_MIDDLE_PAYMENT_DAY'

const CHANGE_BALANCE = 'optionThird/CHANGE_BALANCE'
const CHANGE_BALANCE_PAYMENT_DAY = 'optionThird/CHANGE_BALANCE_PAYMENT_DAY'

const TOGGLE_PAID = 'optionThird/TOGGLE_PAID'
const CHANGE_CHARGE = 'optionThird/CHANGE_CHARGE'
const CHANGE_CHARGE_PAYMENT_DATE = 'optionThird/CHANGE_CHARGE_PAYMENT_DATE'

const CHANGE_BANK_NAME = 'optionThird/CHANGE_BANK_NAME'
const CHANGE_ACCOUNT_NUMBER = 'optionThird/CHANGE_ACCOUNT_NUMBER'
const CHANGE_ACCOUNT_HOLDER = 'optionThird/CHANGE_ACCOUNT_HOLDER'

export const changeSubsidy = createAction(CHANGE_SUBSIDY, subsidy => subsidy);

export const changeDownPayment = createAction(CHANGE_DOWN_PAYMENT, downPayment => downPayment);
export const changePayer = createAction(CHANGE_PAYER, payer => payer);

export const changeMiddlePayment = createAction(CHANGE_MIDDLE_PAYMENT, middlePayment => middlePayment);
export const changeMiddlePaymentDay = createAction(CHANGE_MIDDLE_PAYMENT_DAY, middlePaymentDay => middlePaymentDay);

export const changeBalance = createAction(CHANGE_BALANCE, balance => balance);
export const changeBalancePaymentDay = createAction(CHANGE_BALANCE_PAYMENT_DAY, balancePaymentDay => balancePaymentDay);

export const togglePaid = createAction(TOGGLE_PAID, paid => paid)
export const changeCharge = createAction(CHANGE_CHARGE, charge => charge);
export const changeChargePaymentDate = createAction(CHANGE_CHARGE_PAYMENT_DATE, chargePaymentDate => chargePaymentDate);

export const changeBankName = createAction(CHANGE_BANK_NAME, bankName => bankName);
export const changeAccountNumber = createAction(CHANGE_ACCOUNT_NUMBER, accountNumber => accountNumber);
export const changeAccountHolder = createAction(CHANGE_ACCOUNT_HOLDER, accountHolder => accountHolder);


const initialState = {
  subsidy: '',
  downPayment: '',
  payer: '',
  middlePayment: '',
  middlePaymentDay: '',
  balance: '',
  balancePaymentDay: '',
  paid: '',
  charge: '',
  chargePaymentDate: '',
  bankName: '',
  accountNumber: '',
  accountHolder: '',
}

const optionThird = handleActions(
  {
    [CHANGE_SUBSIDY] : (state, {payload : subsidy}) => ({
      ...state,
      subsidy,
    }),
    [CHANGE_DOWN_PAYMENT] : (state, {payload : downPayment}) => ({
      ...state,
      downPayment,
    }),
    [CHANGE_PAYER] : (state, {payload : payer}) => ({
      ...state,
      payer,
    }),
    [CHANGE_MIDDLE_PAYMENT] : (state, {payload : middlePayment}) => ({
      ...state,
      middlePayment,
    }),
    [CHANGE_MIDDLE_PAYMENT_DAY] : (state, {payload : middlePaymentDay}) => ({
      ...state,
      middlePaymentDay,
    }),
    [CHANGE_BALANCE] : (state, {payload : balance}) => ({
      ...state,
      balance,
    }),
    [CHANGE_BALANCE_PAYMENT_DAY] : (state, {payload : balancePaymentDay}) => ({
      ...state,
      balancePaymentDay,
    }),
    [TOGGLE_PAID] : (state, {payload : paid}) => ({
      ...state,
      paid,
    }),
    [CHANGE_CHARGE] : (state, {payload : charge}) => ({
      ...state,
      charge,
    }),
    [CHANGE_CHARGE_PAYMENT_DATE] : (state, {payload : chargePaymentDate}) => ({
      ...state,
      chargePaymentDate,
    }),
    [CHANGE_BANK_NAME] : (state, {payload : bankName}) => ({
      ...state,
      bankName,
    }),
    [CHANGE_ACCOUNT_NUMBER] : (state, {payload : accountNumber}) => ({
      ...state,
      accountNumber,
    }),
    [CHANGE_ACCOUNT_HOLDER] : (state, {payload : accountHolder}) => ({
      ...state,
      accountHolder,
    }),
  },
  initialState
);

export default optionThird
