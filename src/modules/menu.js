import { produce } from 'immer';
import { createAction, handleActions } from 'redux-actions';

const TOGGLE_SWITCH = 'menu/TOGGLE_SWITCH';
const CHANGE_IMG_URL = 'menu/CHANGE_IMG_URL';
const CHANGE_COMMENT = 'menu/CHANGE_COMMENT';

export const toggleSwitch = createAction(TOGGLE_SWITCH, ({form, key, value}) => ({form, key, value}));
export const changeImgUrl = createAction(CHANGE_IMG_URL, ({form, key, value}) => ({form, key, value}));
export const changeComment = createAction(CHANGE_COMMENT, ({form, key, value}) => ({form, key, value}));

const initialState = {
  standardMenu: {
    standardToggle: false,
    standardImgUrl: '',
  },
  contractMenu: {
    contractToggle: false,
    contractImgUrl: '',
  },
  buildingMenu: {
    buildingToggle: false,
    buildingImgUrl: '',
  },
  registerMenu: {
    registerToggle: false,
    registerImgUrl: '',
  },
  standardMenuResult: {
    standardResultToggle: false,
    standardResultComment: '',
  },
  buildingMenuResult: {
    buildingResultToggle: false,
    buildingResultComment: '',
  },
  registerMenuResult: {
    registerResultToggle: false,
    registerResultComment: '',
  },
}

const menu = handleActions(
  {
    [TOGGLE_SWITCH]:(state, { payload: {form, key, value}}) =>
    produce(state, draft => {
      draft[form][key] = value;
    }),
    [CHANGE_IMG_URL]:(state, { payload: {form, key, value}}) =>
    produce(state, draft => {
      draft[form][key] = value;
    }),
    [CHANGE_COMMENT]:(state, { payload: {form, key, value}}) =>
    produce(state, draft => {
      draft[form][key] = value;
    }),
  },
  initialState,
);

export default menu