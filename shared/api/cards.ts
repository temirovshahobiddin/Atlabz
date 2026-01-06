import apiClient from "./client";

export interface Card {
  id: number;
  cardholder_name: string;
  card_number: string;
  exp_month: string;
  exp_year: string;
  is_default: boolean;
}

export interface CreateCardPayload {
  cardholder_name: string;
  card_number: string;
  exp_month: string;
  exp_year: string;
}

export const cardsApi = {
  getAll: () => apiClient<Card[]>("/cards/"),

  create: (data: CreateCardPayload) =>
    apiClient<Card>("/cards/", {
      method: "POST",
      body: data,
    }),

  delete: (id: number) =>
    apiClient<void>(`/cards/${id}/`, {
      method: "DELETE",
    }),
};
