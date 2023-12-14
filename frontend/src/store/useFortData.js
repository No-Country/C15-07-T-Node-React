import { create } from 'zustand';
import httpService from '../api/httpService';

const URLS = {
  'Solicitud de Mantenimientos': 'https://ejemplo.com/api/mantenimientos',
  'Solicitud de Amenidades': 'https://ejemplo.com/api/amenidades',
  'Quejas y Sugerencias': 'https://ejemplo.com/api/quejas_sugerencias',
};

const useFormData = create((set) => ({
  loading: false,
  error: null,
  data: null,

  sendMaintenanceRequest: async (data) => {
    set({ loading: true, error: null });
    try {
      const response = await httpService.post(
        URLS['Solicitud de Mantenimientos'],
        data,
      );
      set({ data: response.data, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },

  sendAmenitiesRequest: async (data) => {
    set({ loading: true, error: null });
    try {
      const response = await httpService.post(
        URLS['Solicitud de Amenidades'],
        data,
      );
      set({ data: response.data, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },

  sendComplaintsSuggestionsRequest: async (data) => {
    set({ loading: true, error: null });
    try {
      const response = await httpService.post(
        URLS['Quejas y Sugerencias'],
        data,
      );
      set({ data: response.data, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },
}));

export default useFormData;
