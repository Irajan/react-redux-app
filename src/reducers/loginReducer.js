import * as actionTypes from "../actions/actionType";

const INITIAL_STATE = {
  isLogged: false,
  accessToken: null,
};

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return {
        isLogged: true,
        accessToken: action.payload.accessToken,
        userId: action.payload.id,
      };

    case actionTypes.LOG_OUT:
      return INITIAL_STATE;

    default:
      return state;
  }
}
