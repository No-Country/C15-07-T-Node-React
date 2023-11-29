import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: null,
  authToken: null,

  setUser: (value) =>
    set((state) => ({
      ...state,
      user: value
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
      console.error('Error al obtener el token del almacenamiento local:', error);
      return { authToken: null };
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

}));
