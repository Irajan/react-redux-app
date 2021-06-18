import axios from "axios";

import { BASE_URL } from "../constants";

const headers = { "Content-Type": "application/json" };

/**
 *
 * @param {Object} data
 * @returns {Promise}
 */
const register = function (data) {
  return axios.post(`${BASE_URL}/register`, data, { headers });
};

/**
 *
 * @param {Object} data
 * @returns {Promise}
 */
const login = function (data) {
  return axios.post(`${BASE_URL}/login`, data, { headers });
};

export { register, login };
