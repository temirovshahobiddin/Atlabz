const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://89.111.169.6:8000/api";

interface RequestOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
  headers?: Record<string, string>;
  isFormData?: boolean;
}

export async function apiClient<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { method = "GET", body, headers = {}, isFormData = false } = options;

  const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  const config: RequestInit = {
    method,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(!isFormData ? { "Content-Type": "application/json" } : {}),
      ...headers,
    },
  };

  if (body) {
    config.body = isFormData ? (body as FormData) : JSON.stringify(body);
  }

  const response = await fetch(`${API_URL}${endpoint}`, config);

  if (response.status === 401) {
    const refreshed = await refreshToken();
    if (refreshed) {
      return apiClient<T>(endpoint, options);
    }
    if (typeof window !== "undefined") {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      window.location.href = "/login";
    }
  }

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.detail || error.message || "API Error");
  }

  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}

async function refreshToken(): Promise<boolean> {
  const refresh = typeof window !== "undefined" ? localStorage.getItem("refresh_token") : null;
  if (!refresh) return false;

  try {
    const response = await fetch(`${API_URL}/auth/token/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("access_token", data.access);
      return true;
    }
  } catch {
    return false;
  }
  return false;
}

export default apiClient;
