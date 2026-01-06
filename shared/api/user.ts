import apiClient from "./client";

export interface UserSettings {
  id: number;
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  institution?: string;
}

export interface UserReward {
  id: number;
  title: string;
  description: string;
  tokens: number;
  created_at: string;
}

export const userApi = {
  getSettings: () => apiClient<UserSettings>("/user/settings/"),

  updateSettings: (data: Partial<UserSettings>) =>
    apiClient<UserSettings>("/user/settings/", {
      method: "PUT",
      body: data,
    }),

  getRewards: () => apiClient<UserReward[]>("/user/rewards/"),
};
