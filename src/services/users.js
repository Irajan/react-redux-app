import axios from "axios";

import { BASE_URL } from "../constants";

const accessToken = localStorage.getItem("token");
const authHeader = { Authorization: `Barer ${accessToken}` };
const postHeader = { "Content-Type": "application/json" };

const routeUrl = `${BASE_URL}/api/users`;

/**
 * Request to add user
 *
 * @param {Object} user
 * @returns {Promise}
 */
const add = function (user) {
  const headers = { ...authHeader, ...postHeader };

  return axios.post(routeUrl, user, { headers });
};

/**
 * Get data(s) of user
 *
 * @param {Number} userId
 * @returns {Promise}
 */
const get = function (userId) {
  if (userId === undefined) return axios.get(routeUrl, { headers: authHeader });

  return axios.get(`${routeUrl}/${userId}`, { headers: authHeader });
};

/**
 * Update the data of user with given id
 *
 * @param {Number} userId
 * @param {Object} updateBody
 * @returns {Promise}
 *
 */
const update = function (userId, updateBody) {
  const headers = { ...authHeader, ...postHeader };

  return axios.patch(`${routeUrl}/${userId}`, updateBody, { headers });
};

/**
 * Delete the user
 *
 * @param {Number} userId
 * @returns {Promise}
 */
const remove = function (userId) {
  return axios.delete(`${routeUrl}/${userId}`, {
    headers: authHeader,
  });
};

export { add, get, update, remove };
