import * as actionTypes from "../actions/actionType";

const INITIAL_STATE = {
  message: "",
};

export default function editReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.EDIT:
      return {
        message: action.payload.message,
      };

    default:
      return state;
  }
}
