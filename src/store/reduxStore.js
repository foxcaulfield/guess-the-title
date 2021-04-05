import { createStore } from "redux";

const initialState = {
  fieldSizeX: 3,
  fieldSizeY: 3,
  markerPosition: null,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MARKER_POSITION":
      return { ...state };

    default: {
      return state;
    }
  }
}

const store = createStore(appReducer);

export default store;
