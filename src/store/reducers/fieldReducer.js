import { getRandomIntInclusive } from "../../utils/randomInteger";

const RESET_MARKER_POSITION = "RESET_MARKER_POSITION";
const ADD_COLUMNS_ACTION_CREATOR = "ADD_COLUMNS_ACTION_CREATOR";
const ADD_ROWS_ACTION_CREATOR = "ADD_ROWS_ACTION_CREATOR";
const REMOVE_COLUMNS_ACTION_CREATOR = "REMOVE_COLUMNS_ACTION_CREATOR";
const REMOVE_ROWS_ACTION_CREATOR = "REMOVE_ROWS_ACTION_CREATOR";

const initialState = {
  fieldSizeX: 3,
  fieldSizeY: 3,
  
  markerPosition: [],

  isWin: false,
  isGameOver: false,
};

function fieldReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_MARKER_POSITION:
    //get two integers in a given range and set them in a new copy of state
      let posX = getRandomIntInclusive(1, state.fieldSizeX);
      let posY = getRandomIntInclusive(1, state.fieldSizeY);
      return {
        ...state,
        markerPosition: [posX, posY],
      };
    case ADD_COLUMNS_ACTION_CREATOR:
      return {
        ...state,
        fieldSizeX: state.fieldSizeX + 1,
      };
    case ADD_ROWS_ACTION_CREATOR:
      return {
        ...state,
        fieldSizeY: state.fieldSizeY + 1,
      };
    case REMOVE_COLUMNS_ACTION_CREATOR:
      return {
        ...state,
        fieldSizeX: state.fieldSizeX - 1,
      };
    case REMOVE_ROWS_ACTION_CREATOR:
      return {
        ...state,
        fieldSizeY: state.fieldSizeY - 1,
      };
    default: {
      return state;
    }
  }
}

export function resetMarkerPositionActionCreator() {
  return {
    type: RESET_MARKER_POSITION,
  };
}

export function addColumnsActionCreator() {
  return {
    type: ADD_COLUMNS_ACTION_CREATOR,
  };
}
export function addRowsActionCreator() {
  return {
    type: ADD_ROWS_ACTION_CREATOR,
  };
}
export function removeColumnsActionCreator() {
  return {
    type: REMOVE_COLUMNS_ACTION_CREATOR,
  };
}
export function removeRowsActionCreator() {
  return {
    type: REMOVE_ROWS_ACTION_CREATOR,
  };
}

export default fieldReducer;
