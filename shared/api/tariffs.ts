import apiClient from "./client";

export interface Tariff {
  id: number;
  name: string;
  price: number;
  duration_months: number;
  tokens: number;
  features: string[];
}

export const tariffsApi = {
  getAll: () => apiClient<Tariff[]>("/tariffs/"),

  getById: (id: number) => apiClient<Tariff>(`/tariffs/${id}/`),
};
