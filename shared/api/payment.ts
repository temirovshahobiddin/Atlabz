import apiClient from "./client";

export interface PaymentPayload {
  card_id: number;
  tariff_id: number;
}

export interface PaymentResponse {
  success: boolean;
  message: string;
  transaction_id?: string;
}

export const paymentApi = {
  pay: (data: PaymentPayload) =>
    apiClient<PaymentResponse>("/pay/", {
      method: "POST",
      body: data,
    }),
};
