import { create } from 'zustand';
import httpService from '../api/httpService';

export const useUserStore = create((set) => ({
  user: null,
  authToken: null,
  loading: false,
  error: null,

  setUser: (value) =>
    set((state) => ({
      ...state,
      user: value,
    })),

  setAuthToken: async () => {
    try {
      let value = await localStorage.getItem('token');
      if (!value) {
        console.log('No hay token en el storage');
        return { authToken: null };
      }
      set(() => ({ authToken: value }));
      return { authToken: value };
    } catch (error) {
      console.error(
        'Error al obtener el token del almacenamiento local:',
        error,
      );
      return { authToken: null };
    }
  },

  login: async ({ email, password }) => {
    try {
      set(() => ({ loading: true, error: null }));

      const response = await httpService.post('/api/v1/auth/login', {
        email,
        password,
      });
      const { data } = response;

      localStorage.setItem('token', data.token);
      set(() => ({ authToken: data.token, loading: false }));

      return { status: response.status, data };
    } catch (error) {
      console.error('Error al intentar iniciar sesión:', error);
      set(() => ({ error: error.data.message, loading: false }));
    }
  },

  getMyInfo: async () => {
    try {
      set(() => ({ loading: true, error: null }));

      const response = await httpService.get('/api/v1/users/me');
      const { data } = response;

      set(() => ({ user: data, loading: false }));

      return { status: response.status, data };
    } catch (error) {
      console.error('Error al intentar obtener el usuario:', error);
      set(() => ({ error: error.data.message, loading: false }));
    }
  },

  logout: async () => {
    try {
      await localStorage.removeItem('token');
      set(() => ({ authToken: '' }));
    } catch (error) {
      console.error('Error al intentar cerrar sesión:', error);
      // a definir manejo de error
    }
  },

  register: async ({
    firstName,
    lastName,
    email,
    password,
    phone,
    birthday,
    gender,
    role,
    urlImage,
  }) => {
    try {
      set(() => ({ loading: true, error: null }));

      const response = await httpService.post('/api/v1/auth/register', {
        firstName,
        lastName,
        email,
        password,
        phone,
        birthday,
        gender,
        role,
        urlImage,
      });
      const { data } = response;

      localStorage.setItem('token', data.token);
      set(() => ({ authToken: data.token, loading: false }));

      return { status: response.status, data };
    } catch (error) {
      console.error('Error al intentar registrar usuario:', error.data.message);
      set(() => ({ error: error.data.message, loading: false }));
    }
  },
}));
