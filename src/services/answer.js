import axios from "axios";

import { BASE_URL } from "../constants";

const accessToken = localStorage.getItem("token");
const authHeader = { Authorization: `Barer ${accessToken}` };
const postHeader = { "Content-Type": "application/json" };

const routeUrl = `${BASE_URL}/api/answer`;

/**
 * Request to add answer
 *
 * @param {Object} answer
 * @returns {Promise}
 */
const add = function (answer) {
  const headers = { ...authHeader, ...postHeader };

  return axios.post(routeUrl, answer, { headers });
};

/**
 * Get answer(s) of question
 *
 * @param {Number} questionId
 * @returns {Promise}
 */
const get = function (questionId) {
  return axios.get(`${routeUrl}/${questionId}`, { headers: authHeader });
};

/**
 * Update the data of answer with given id
 *
 * @param {Number} answerId
 * @param {Object} updateBody
 * @returns {Promise}
 *
 */
const update = function (answerId, updateBody) {
  const headers = { ...authHeader, ...postHeader };

  return axios.patch(`${routeUrl}/${answerId}`, updateBody, { headers });
};

/**
 * Delete the answer
 *
 * @param {Number} answerId
 * @returns {Promise}
 */
const remove = function (answerId) {
  return axios.delete(`${routeUrl}/${answerId}`, { headers: authHeader });
};

export { add, get, update, remove };
