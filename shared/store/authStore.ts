"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  user: {
    id?: string;
    email?: string;
    name?: string;
  } | null;
  pendingPayment: {
    tariff: string;
    price: number;
    addons: string[];
  } | null;
  login: (user: { id: string; email: string; name?: string }) => void;
  logout: () => void;
  setPendingPayment: (payment: { tariff: string; price: number; addons: string[] } | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      pendingPayment: null,
      login: (user) => set({ isAuthenticated: true, user }),
      logout: () => set({ isAuthenticated: false, user: null, pendingPayment: null }),
      setPendingPayment: (payment) => set({ pendingPayment: payment }),
    }),
    {
      name: "auth-storage",
    }
  )
);

// Helper function to check auth status
export const checkAuth = (): boolean => {
  if (typeof window === "undefined") return false;
  const storage = localStorage.getItem("auth-storage");
  if (!storage) return false;
  try {
    const parsed = JSON.parse(storage);
    return parsed.state?.isAuthenticated ?? false;
  } catch {
    return false;
  }
};
