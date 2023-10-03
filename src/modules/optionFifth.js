import { createAction, handleActions } from 'redux-actions'

const CHANGE_ADDRESS = 'optionFifth/CHANGE_ADDRESS'
const CHANGE_REST_ADDRESS = 'optionFifth/CHANGE_REST_ADDRESS'
const CHANGE_LAND_USE = 'optionFifth/CHANGE_LAND_USE'
const CHANGE_LAND_USE_AREA = 'optionFifth/CHANGE_LAND_USE_AREA'
const CHANGE_BUILDING_USE = 'optionFifth/CHANGE_BUILDING_USE'
const CHANGE_BUILDING_USE_AREA = 'optionFifth/CHANGE_BUILDING_USE_AREA'
const CHANGE_RENTABLE_SPACE = 'optionFifth/CHANGE_RENTABLE_SPACE'
const CHANGE_RENTABLE_SPACE_AREA = 'optionFifth/CHANGE_RENTABLE_SPACE_AREA'

export const changeAddress = createAction(CHANGE_ADDRESS, address => address);
export const changeRestAddress = createAction(CHANGE_REST_ADDRESS, restAddress => restAddress);
export const changeLandUse = createAction(CHANGE_LAND_USE, landUse => landUse);
export const changeLandUseArea = createAction(CHANGE_LAND_USE_AREA, landUseArea => landUseArea);
export const changeBuildingUse = createAction(CHANGE_BUILDING_USE, buildingUse => buildingUse);
export const changeBuildingUseArea = createAction(CHANGE_BUILDING_USE_AREA, buildingUseArea => buildingUseArea);
export const changeRentableSpace = createAction(CHANGE_RENTABLE_SPACE, rentableSpace => rentableSpace);
export const changeRentableSpaceArea = createAction(CHANGE_RENTABLE_SPACE_AREA, rentableSpaceArea => rentableSpaceArea);

const initialState = {
  address: '',
  restAddress: '',
  landUse: '',
  landUseArea: '',
  buildingUse: '',
  buildingUseArea: '',
  rentableSpace: '',
  rentableSpaceArea: '',
}

const optionFifth = handleActions(
  {
    [CHANGE_ADDRESS] : (state, {payload : address}) => ({
      ...state,
      address,
    }),
    [CHANGE_REST_ADDRESS] : (state, {payload : restAddress}) => ({
      ...state,
      restAddress,
    }),
    [CHANGE_LAND_USE] : (state, {payload : landUse}) => ({
      ...state,
      landUse,
    }),
    [CHANGE_LAND_USE_AREA] : (state, {payload : landUseArea}) => ({
      ...state,
      landUseArea,
    }),
    [CHANGE_BUILDING_USE] : (state, {payload : buildingUse}) => ({
      ...state,
      buildingUse,
    }),
    [CHANGE_BUILDING_USE_AREA] : (state, {payload : buildingUseArea}) => ({
      ...state,
      buildingUseArea,
    }),
    [CHANGE_RENTABLE_SPACE] : (state, {payload : rentableSpace}) => ({
      ...state,
      rentableSpace,
    }),
    [CHANGE_RENTABLE_SPACE_AREA] : (state, {payload : rentableSpaceArea}) => ({
      ...state,
      rentableSpaceArea,
    }),
  },
  initialState
);

export default optionFifth