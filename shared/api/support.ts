import apiClient from "./client";

export interface SupportMessage {
  id: number;
  message: string;
  is_from_user: boolean;
  created_at: string;
}

export const supportApi = {
  getMessages: () => apiClient<SupportMessage[]>("/support/messages/"),

  sendMessage: (message: string) =>
    apiClient<SupportMessage>("/support/messages/", {
      method: "POST",
      body: { message },
    }),
};
