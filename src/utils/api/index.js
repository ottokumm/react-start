import axios from 'axios';
import { API_HOST } from 'constants/api';

const optionsToParameterizedUrl = (options) => {
  if (!options) return '';

  const values = Object.keys(options)
    .map((key) => `${key}=${options[key]}`)
    .join('&');

  return values.length ? `?${values}` : '';
};

const callApi = async (endpoint, params = {}) => {
  console.log('[CALL API] Called with endpoint', endpoint);

  const { method = 'GET', body = null } = params;

  const url = endpoint.indexOf('http') !== 0 ? `${API_HOST}/${endpoint}` : endpoint;
  const options = {
    url,
    method,
  };

  console.log('[API]', url);

  if (body) {
    if (method === 'GET') {
      options.url += optionsToParameterizedUrl(body);
    } else {
      options.data = body;
    }
  }

  const result = await axios(options);

  console.log('[API CALL RESPONSE]', result);

  return result;
};

export const request = async (endpoint, options) => callApi(endpoint, options);

export const Request = {
  get: (endpoint, data) => request(endpoint, { method: 'GET', body: data }),
  post: (endpoint, data) => request(endpoint, { method: 'POST', body: data }),
  put: (endpoint, data) => request(endpoint, { method: 'PUT', body: data }),
  delete: (endpoint, data) => request(endpoint, { method: 'DELETE', body: data }),
};
