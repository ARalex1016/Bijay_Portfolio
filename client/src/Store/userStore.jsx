import { create } from "zustand";
import axios from "axios";

let API = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_ROUTE}`;

export const useUserStore = create((set) => ({
  userDetails: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,

  login: async (userForm) => {
    set({ isLoading: true, isAuthenticated: false, error: null });

    try {
      let details = await axios.post(API, userForm);

      set({
        userDetails: details.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        isLoading: false,
        isAuthenticated: false,
        error: error.response.data.message,
        userDetails: null,
      });
      throw error;
    }
  },

  getUser: async () => {
    set({ isLoading: true, error: null });

    try {
      let details = await axios.get(API);
      set({
        userDetails: details.data.user,
        isLoading: false,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: error.response.data.message,
        userDetails: null,
      });
      throw error;
    }
  },

  updateDetail: async (userDetail) => {
    set({ isLoading: true, error: null });

    try {
      let details = await axios.patch(API);
      set({
        userDetails: details.data.user,
        isLoading: false,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: error.response.data.message,
        userDetails: null,
      });
      throw error;
    }
  },

  changePassword: async (currentPassword, newPassword) => {
    set({ isLoading: true, error: null });

    try {
      let details = await axios.get(API, { currentPassword, newPassword });
      set({
        userDetails: details.data.user,
        isLoading: false,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: error.response.data.message,
        userDetails: null,
      });
      throw error;
    }
  },
}));
