import * as actionTypes from "./actionType";

export function login(id, accessToken) {
  return {
    type: actionTypes.LOG_IN,
    payload: { id, accessToken },
  };
}

export function logout() {
  return {
    type: actionTypes.LOG_IN,
  };
}

export function error(err) {
  const errMessage = err.response?.data || "No response from server !";

  return {
    type: actionTypes.ERROR_ENCOUNTERED,
    payload: {
      message: errMessage,
    },
  };
}

export function edit(message) {
  return {
    type: actionTypes.EDIT,
    payload: {
      message,
    },
  };
}
