import axios from "axios";

import { BASE_URL } from "../constants";

const accessToken = localStorage.getItem("token");
const authHeader = { Authorization: `Barer ${accessToken}` };
const postHeader = { "Content-Type": "application/json" };

const routeUrl = `${BASE_URL}/api/questions`;

/**
 * Request to add question
 *
 * @param {Object} question
 * @returns {Promise}
 */
const add = function (question) {
  const headers = { ...authHeader, ...postHeader };

  return axios.post(routeUrl, question, { headers });
};

/**
 * Get data(s) of question
 *
 * @param {Number} questionId
 * @returns {Promise}
 */
const get = function (questionId) {
  if (questionId === undefined)
    return axios.get(routeUrl, { headers: authHeader });

  return axios.get(`${routeUrl}/${questionId}`, { headers: authHeader });
};

/**
 * Update the data of question with given id
 *
 * @param {Number} questionId
 * @param {Object} updateBody
 * @returns {Promise}
 *
 */
const update = function (questionId, updateBody) {
  const headers = { ...authHeader, ...postHeader };

  return axios.patch(`${routeUrl}/${questionId}`, updateBody, { headers });
};

/**
 * Delete the question
 *
 * @param {Number} questionId
 * @returns {Promise}
 */
const remove = function (questionId) {
  return axios.delete(`${routeUrl}/${questionId}`, { headers: authHeader });
};

export { add, get, update, remove };
