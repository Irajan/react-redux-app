import * as actionTypes from "../actions/actionType";

const INITIAL_STATE = {
  isLogged: localStorage.getItem("token") ? true : false,
  id: localStorage.getItem("loggedId"),
};

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.LOG_IN:
      const accessToken = action.payload.accessToken;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("loggedId", action.payload.id);

      return { isLogged: true, id: action.payload.id };

    case actionTypes.LOG_OUT:
      return { isLogged: false };

    default:
      return state;
  }
}
