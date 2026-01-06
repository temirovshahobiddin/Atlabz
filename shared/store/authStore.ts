"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authApi, saveTokens, clearTokens, userApi, UserSettings } from "@/shared/api";

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserSettings | null;
  pendingPayment: {
    tariff: string;
    price: number;
    addons: string[];
  } | null;
  requestCode: (type: "email" | "phone", value: string) => Promise<void>;
  verifyCode: (type: "email" | "phone", value: string, code: string, password: string) => Promise<void>;
  login: (type: "email" | "phone", value: string, password: string) => Promise<void>;
  logout: () => void;
  fetchUser: () => Promise<void>;
  setPendingPayment: (payment: { tariff: string; price: number; addons: string[] } | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      isLoading: false,
      user: null,
      pendingPayment: null,

      requestCode: async (type, value) => {
        set({ isLoading: true });
        try {
          await authApi.requestCode({ type, value });
        } finally {
          set({ isLoading: false });
        }
      },

      verifyCode: async (type, value, code, password) => {
        set({ isLoading: true });
        try {
          const { access, refresh } = await authApi.verifyCode({ type, value, code, password });
          saveTokens(access, refresh);
          set({ isAuthenticated: true });
          await get().fetchUser();
        } finally {
          set({ isLoading: false });
        }
      },

      login: async (type, value, password) => {
        set({ isLoading: true });
        try {
          const { access, refresh } = await authApi.login({ type, value, password });
          saveTokens(access, refresh);
          set({ isAuthenticated: true });
          await get().fetchUser();
        } finally {
          set({ isLoading: false });
        }
      },

      logout: () => {
        clearTokens();
        set({ isAuthenticated: false, user: null, pendingPayment: null });
      },

      fetchUser: async () => {
        try {
          const user = await userApi.getSettings();
          set({ user });
        } catch {
          set({ user: null });
        }
      },

      setPendingPayment: (payment) => set({ pendingPayment: payment }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        pendingPayment: state.pendingPayment,
      }),
    }
  )
);

export const checkAuth = (): boolean => {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("access_token");
};
