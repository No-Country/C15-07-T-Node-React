import { create } from 'zustand';
import httpService from '../api/httpService';

export const useFormData = create((set) => ({
  loading: false,
  error: null,
  data: null,

  sendRequest: async (url, data) => {
    set({ loading: true, error: null });

    var token = localStorage.getItem('token');
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );
    var userId = JSON.parse(jsonPayload).id;

    try {
      const response = await httpService.post(
        url,
        data,
        ((data.status = true), (data.user_id = userId)),
      );
      set({ data: response.data, loading: false });
      return response.data;
    } catch (error) {
      set({ error, loading: false });
      throw error;
    }
  },
}));

export default useFormData;
