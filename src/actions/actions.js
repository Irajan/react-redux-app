import * as actionTypes from "./actionType";

export function login(accessToken, id) {
  return {
    type: actionTypes.LOG_IN,
    payload: {
      accessToken,
      id,
    },
  };
}
