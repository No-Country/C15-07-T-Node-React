import { create } from 'zustand';
import httpService from '../api/httpService';

const generatePassword = () => {
  // Genera una contraseña segura
  return Math.random().toString(36).slice(-8);
};

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
      set(() => ({ user: null, authToken: null, loading: false, error: null }));
    } catch (error) {
      console.error('Error al intentar cerrar sesión:', error);
      // a definir manejo de error
    }
  },

  register: async (
    firstName,
    lastName,
    email,
    password = generatePassword(),
    phone,
    birthday,
    gender = null,
    role,
    urlImage = 'https://tanzolymp.com/images/default-non-user-no-photo-1-768x768.jpg',
  ) => {
    try {
      const response = await httpService.post(
        'https://nc-condominiums-backend.onrender.com/api/v1/auth/register',
        {
          firstName,
          lastName,
          email,
          password,
          phone,
          birthday,
          gender,
          role,
          urlImage,
        },
      );
      set({ user: response.data });
    } catch (error) {
      set({ error: error.message });
    }
  },
}));
