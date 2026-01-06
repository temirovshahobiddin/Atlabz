import apiClient from "./client";

interface RequestCodePayload {
  type: "email" | "phone";
  value: string;
}

interface VerifyCodePayload {
  type: "email" | "phone";
  value: string;
  code: string;
  password: string;
}

interface LoginPayload {
  type: "email" | "phone";
  value: string;
  password: string;
}

interface AuthResponse {
  access: string;
  refresh: string;
}

export const authApi = {
  requestCode: (data: RequestCodePayload) =>
    apiClient<{ message: string }>("/auth/request-code/", {
      method: "POST",
      body: data,
    }),

  verifyCode: (data: VerifyCodePayload) =>
    apiClient<AuthResponse>("/auth/verify-code/", {
      method: "POST",
      body: data,
    }),

  login: (data: LoginPayload) =>
    apiClient<AuthResponse>("/auth/login/", {
      method: "POST",
      body: data,
    }),
};

export const saveTokens = (access: string, refresh: string) => {
  localStorage.setItem("access_token", access);
  localStorage.setItem("refresh_token", refresh);
};

export const clearTokens = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

export const getAccessToken = () => localStorage.getItem("access_token");
