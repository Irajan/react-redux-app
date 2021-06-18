import * as actionTypes from "../actions/actionType";

const INITIAL_STATE = {
  message: "",
};

export default function errorReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.ERROR_ENCOUNTERED:
      return {
        message: action.payload.message,
      };

    default:
      return state;
  }
}
