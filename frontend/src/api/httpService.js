import axios from 'axios';

const httpService = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export default httpService;

// Request interceptor (Outgoing)
httpService.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log('Interceptor Request (Outgoing) ', config);
    // Request authorization
    if (!config.url.endsWith('/api/v1/auth/login')) {
      const token = localStorage.getItem('token');
      if (token) {
        // Añade la cabecera de autorización solo si no es la solicitud de login
        config.headers.Authorization = `jwt ${token}`;
      }
    }
    return config;
  },
  function (error) {
    // Request error
    return Promise.reject(error);
  },
);

// Response interceptor (Incoming) - Optional
httpService.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger

    // Response data
    console.log('Interceptor Response (Incoming) ', response);

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error.response);
  },
);
