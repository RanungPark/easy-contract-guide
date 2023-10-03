import { createAction, handleActions } from 'redux-actions'

const CHANGE_BUILT_IN = 'optionFourth/CHANGE_BUILT_IN'
const CHANGE_CLEANING = 'optionFourth/CHANGE_CLEANING'
const CHANGE_DIRECT = 'optionFourth/CHANGE_DIRECT'

export const changeBuiltIn = createAction(CHANGE_BUILT_IN, builtIn => builtIn);
export const changeCleaning = createAction(CHANGE_CLEANING, cleaning => cleaning);
export const changeDirect = createAction(CHANGE_DIRECT, direct => direct);

const initialState = {
  builtIn: '',
  cleaning: '',
  direct: '',
}

const optionFourth = handleActions(
  {
    [CHANGE_BUILT_IN] : (state, {payload : builtIn}) => ({
      ...state,
      builtIn,
    }),
    [CHANGE_CLEANING] : (state, {payload : cleaning}) => ({
      ...state,
      cleaning,
    }),
    [CHANGE_DIRECT] : (state, {payload : direct}) => ({
      ...state,
      direct,
    }),
  },
  initialState
);

export default optionFourth