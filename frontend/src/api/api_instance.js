import axios from 'axios';
import PropTypes from 'prop-types';

const API_ENDPOINT_URL = 'https://nc-condominiums-backend.onrender.com/';

const defaultConfig = {
  baseURL: API_ENDPOINT_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const api = axios.create(defaultConfig);

export default api;

api.propTypes = {
  defaultConfig: PropTypes.object,
};
